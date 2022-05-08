import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cacheModule } from 'src/shared/cache/cache.module';
import { MailingService } from 'src/shared/mailing/mailing.service';
import { UsersRepository } from '../users/users.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RevokedTokensRepository } from './revoked-tokens.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository]), cacheModule],
  controllers: [AuthController],
  providers: [AuthService, MailingService, RevokedTokensRepository],
})
export class AuthModule {}
