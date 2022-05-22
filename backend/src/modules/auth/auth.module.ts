import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cacheModule } from 'src/shared/cache/cache.module';
import { MailingService } from 'src/shared/mailing/mailing.service';
import { CaptchaMiddleware } from 'src/shared/middlewares/captcha';
import { UsersRepository } from '../users/users.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RevokedTokensRepository } from './revoked-tokens.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository]), cacheModule],
  controllers: [AuthController],
  providers: [AuthService, MailingService, RevokedTokensRepository],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CaptchaMiddleware)
      .forRoutes(
        { path: 'v1/auth/sign-in', method: RequestMethod.POST },
        { path: 'v1/auth/sign-up', method: RequestMethod.POST },
      );
  }
}
