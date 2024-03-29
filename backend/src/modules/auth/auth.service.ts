import {
  ConflictException,
  ForbiddenException,
  GoneException,
  Inject,
  Injectable,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity, UserRelations } from '../users/db/user.entity';
import { UsersRepository } from '../users/db/users.repository';
import { SignInDto } from './dto/sign-in.dto';
import * as bcrypt from 'bcryptjs';
import { GeneralConfig, generalConfig } from 'src/config/general.config';
import { UserStatuses } from '../users/types/user-statuses.enum';
import * as uuid from 'uuid';
import * as jwt from 'jsonwebtoken';
import { MailingService } from 'src/shared/mailing/mailing.service';
import { TokensSerializer } from './serializers/tokens.serializer';
import { JwtConfig, jwtConfig } from 'src/config/jwt.config';
import { JwtPayload, JwtTypes } from './types/jwt-payload.interface';
import { SignInSerializer } from './serializers/sign-in.serializer';
import { RefreshTokenDto } from './dto/refresh-tokens.dto';
import { RevokedTokensRepository } from './revoked-tokens.repository';
import { SignUpDto } from './dto/sign-up.dto';
import { SendResetPasswordLinkDto } from './dto/send-reset-password-link.dto';
import { ResetPasswordCodesRepository } from './reset-password-codes.repository';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ContactsRepository } from '../contacts/db/contacts.repository';
import { ResendVerificationLinkDto } from './dto/resend-verification-link.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    @InjectRepository(ContactsRepository)
    private contactsRepository: ContactsRepository,
    @Inject(generalConfig.KEY)
    private generalConf: GeneralConfig,
    @Inject(jwtConfig.KEY)
    private jwtConf: JwtConfig,
    private mailingService: MailingService,
    private revokedTokensRepository: RevokedTokensRepository,
    private resetPasswordCodesRepository: ResetPasswordCodesRepository,
  ) {}

  async signUp(dto: SignUpDto): Promise<UserEntity> {
    const { nickname, email, password, baseUrl } = dto;
    const isLinkValid = this.isBaseURLValid(baseUrl);
    if (!isLinkValid) {
      throw new ForbiddenException('Wrong base URL');
    }

    const existingUser = await this.usersRepository.findOne({ email });
    if (existingUser) {
      throw new ConflictException(`User with email '${email}' already exists`);
    }

    const user = await this.usersRepository.save({
      nickname,
      email,
      passwordHash: await this.getPasswordHash(password),
      status: UserStatuses.VERIFICATION_NEEDED,
      verificationToken: uuid.v4(),
    });
    if (dto.phoneNumber) {
      await this.contactsRepository.save({
        userId: user.id,
        accessMode: dto.phoneNumberAccessMode,
        type: 'phone',
        value: dto.phoneNumber,
      });
    }

    await this.sendVerificationLink(user, baseUrl);

    return this.usersRepository.findOne(user.id, {
      relations: [UserRelations.CONTACTS, UserRelations.INVOLVEMENTS],
    });
  }

  async signIn(dto: SignInDto): Promise<SignInSerializer> {
    const { email, password } = dto;

    const user = await this.usersRepository.findOne(
      { email },
      { relations: [UserRelations.INVOLVEMENTS, UserRelations.CONTACTS] },
    );
    if (!user) {
      throw new NotFoundException(`User with email '${email}' not found`);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordCorrect) {
      throw new ForbiddenException('Password is wrong');
    }

    if (user.status !== UserStatuses.ACTIVE) {
      throw new PreconditionFailedException('User is not verified');
    }

    return { user, tokens: this.generateTokens(user.id) };
  }

  async refreshTokens(dto: RefreshTokenDto): Promise<TokensSerializer> {
    const payload: JwtPayload = this.verifyRefreshToken(dto.refreshToken);
    const isRevoked = await this.revokedTokensRepository.getRevokedPair(
      payload.pairId,
    );
    if (isRevoked) {
      throw new ForbiddenException();
    }

    await this.revokedTokensRepository.setRevokedPair(
      payload.pairId,
      this.getRevokedTokenTtl(payload.exp),
    );

    return this.generateTokens(payload.uid);
  }

  async verifyEmail(verificationToken: string): Promise<void> {
    const user = await this.usersRepository.findOne({ verificationToken });
    if (!user) {
      throw new NotFoundException('Verification info not found');
    }

    await this.usersRepository.save({
      ...user,
      verificationToken: '',
      status: UserStatuses.ACTIVE,
    });
  }

  async signOut(dto: RefreshTokenDto) {
    const payload: JwtPayload = this.verifyRefreshToken(dto.refreshToken);

    await this.revokedTokensRepository.setRevokedPair(
      payload.pairId,
      this.getRevokedTokenTtl(payload.exp),
    );
  }

  async getCurrentUser(userId: string) {
    const user = await this.usersRepository.findOne(
      { id: userId },
      { relations: [UserRelations.INVOLVEMENTS, UserRelations.CONTACTS] },
    );
    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }

  async sendResetPasswordLink({ email, baseUrl }: SendResetPasswordLinkDto) {
    const isLinkValid = this.isBaseURLValid(baseUrl);
    if (!isLinkValid) {
      throw new ForbiddenException('Wrong base URL');
    }

    const user = await this.usersRepository.findOne({ email });
    if (!user) {
      return;
    }

    const code = uuid.v4();
    await this.resetPasswordCodesRepository.setCode(
      user.id,
      code,
      this.generalConf.resetPasswordCodeExpiresInMinutes * 60,
    );

    const resetPasswordLink = `${baseUrl}/account/reset-password?code=${code}`;
    await this.mailingService.sendResetPasswordEmail(email, resetPasswordLink);
  }

  async resetPassword(dto: ResetPasswordDto) {
    const userId = await this.resetPasswordCodesRepository.getUserId(dto.code);
    if (!userId) {
      throw new GoneException('Reset password code is wrong or expired');
    }

    const user = await this.usersRepository.findOne(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.passwordHash = await this.getPasswordHash(dto.newPassword);
    await this.usersRepository.save(user);
    await this.resetPasswordCodesRepository.deleteCodes(user.id);
  }

  async resendVerificationLink({ email, baseUrl }: ResendVerificationLinkDto) {
    const isLinkValid = this.isBaseURLValid(baseUrl);
    if (!isLinkValid) {
      throw new ForbiddenException('Wrong base URL');
    }

    const user = await this.usersRepository.findOne({ email });
    if (!user) {
      throw new NotFoundException('User with such email was not found');
    }

    await this.sendVerificationLink(user, baseUrl);
  }

  private async sendVerificationLink(
    user: UserEntity,
    baseUrl: string,
  ): Promise<void> {
    const verificationLink = `${baseUrl}/account/verification/${user.verificationToken}`;
    return this.mailingService.sendVerificationEmail(
      user.email,
      verificationLink,
    );
  }

  private generateTokens(userId: string): TokensSerializer {
    const pairId = uuid.v4();
    const accessPayload: JwtPayload = {
      uid: userId,
      type: JwtTypes.ACCESS,
      pairId,
    };
    const refreshPayload: JwtPayload = {
      uid: userId,
      type: JwtTypes.REFRESH,
      pairId,
    };

    const accessToken = jwt.sign(accessPayload, this.jwtConf.secret, {
      expiresIn: this.jwtConf.accessExpiresIn,
    });
    const refreshToken = jwt.sign(refreshPayload, this.jwtConf.secret, {
      expiresIn: this.jwtConf.refreshExpiresIn,
    });

    return {
      access: {
        token: accessToken,
        expiresAt: (jwt.decode(accessToken) as JwtPayload).exp,
      },
      refresh: {
        token: refreshToken,
        expiresAt: (jwt.decode(refreshToken) as JwtPayload).exp,
      },
    };
  }

  private verifyRefreshToken(refreshToken: string) {
    let payload: JwtPayload;

    try {
      payload = jwt.verify(refreshToken, this.jwtConf.secret) as JwtPayload;
      if (payload.type !== JwtTypes.REFRESH) {
        throw new Error();
      }
    } catch (err) {
      throw new ForbiddenException();
    }

    return payload;
  }

  private getRevokedTokenTtl(exp: number) {
    const now = Math.floor(Date.now() / 1000);
    return exp - now;
  }

  private getPasswordHash(password: string) {
    return bcrypt.hash(password, this.generalConf.bcryptSaltRounds);
  }

  private isBaseURLValid(baseUrl: string) {
    return this.generalConf.allowedOrigins.some((origin) => {
      return (
        baseUrl.startsWith(origin) &&
        origin.length + 3 === baseUrl.length &&
        /\/\w{2}$/.test(baseUrl)
      );
    });
  }
}
