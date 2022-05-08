import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../users/user.entity';
import { UsersRepository } from '../users/users.repository';
import { AuthDto } from './dto/auth.dto';
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

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    @Inject(generalConfig.KEY)
    private generalConfig: GeneralConfig,
    @Inject(jwtConfig.KEY)
    private jwtConfig: JwtConfig,
    private mailingService: MailingService,
    private revokedTokensRepository: RevokedTokensRepository,
  ) {}

  async signUp(dto: AuthDto): Promise<UserEntity> {
    const { email, password } = dto;

    const existingUser = await this.usersRepository.findOne({ email });
    if (existingUser) {
      throw new ConflictException(`User with email '${email}' already exists`);
    }

    const passwordHash = await bcrypt.hash(
      password,
      this.generalConfig.bcryptSaltRounds,
    );

    const user = await this.usersRepository.save({
      email,
      passwordHash,
      status: UserStatuses.VERIFICATION_NEEDED,
      verificationToken: uuid.v4(),
    });

    await this.sendVerificationLink(user);

    return user;
  }

  async signIn(dto: AuthDto): Promise<SignInSerializer> {
    const { email, password } = dto;

    const user = await this.usersRepository.findOne({ email });
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

  private async sendVerificationLink(user: UserEntity): Promise<void> {
    const verificationLink = `${this.generalConfig.serverUrl}/api/v1/auth/verify/${user.verificationToken}`;
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

    const accessToken = jwt.sign(accessPayload, this.jwtConfig.secret, {
      expiresIn: this.jwtConfig.accessExpiresIn,
    });
    const refreshToken = jwt.sign(refreshPayload, this.jwtConfig.secret, {
      expiresIn: this.jwtConfig.refreshExpiresIn,
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
      payload = jwt.verify(refreshToken, this.jwtConfig.secret) as JwtPayload;
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
}
