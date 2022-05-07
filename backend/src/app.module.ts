import { Module } from '@nestjs/common';
import { configModule } from './config/config.module';
import { databaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { MailingService } from './shared/mailing/mailing.service';

@Module({
  imports: [configModule, databaseModule, AuthModule],
  controllers: [],
  providers: [MailingService],
})
export class AppModule {}
