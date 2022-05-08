import { Module } from '@nestjs/common';
import { configModule } from './config/config.module';
import { databaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { cacheModule } from './shared/cache/cache.module';
import { MailingService } from './shared/mailing/mailing.service';
import { InvolvementsModule } from './modules/involvements/involvements.module';

@Module({
  imports: [configModule, databaseModule, cacheModule, AuthModule, InvolvementsModule],
  controllers: [],
  providers: [MailingService],
})
export class AppModule {}
