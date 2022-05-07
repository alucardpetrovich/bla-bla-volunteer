import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../users/user.entity';
import { UsersRepository } from '../users/users.repository';
import { AuthDto } from './dto/sign-up.dto';
import bcrypt from 'bcryptjs';
import { GeneralConfig, generalConfig } from 'src/config/general.config';
import { UserStatuses } from '../users/types/user-statuses.enum';
import uuid from 'uuid';
import { MailingService } from 'src/shared/mailing/mailing.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    @Inject(generalConfig.KEY)
    private generalConfig: GeneralConfig,
    private mailingService: MailingService,
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

  private async sendVerificationLink(user: UserEntity): Promise<void> {
    const verificationLink = `${this.generalConfig.serverUrl}/api/v1/auth/verify/${user.verificationToken}`;
    return this.mailingService.sendVerificationEmail(
      user.email,
      verificationLink,
    );
  }
}
