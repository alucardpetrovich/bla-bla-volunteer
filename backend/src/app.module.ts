import { Module } from '@nestjs/common';
import { configModule } from './config/config.module';
import { databaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { cacheModule } from './shared/cache/cache.module';
import { MailingService } from './shared/mailing/mailing.service';
import { InvolvementsModule } from './modules/involvements/involvements.module';
import { RidesModule } from './modules/rides/rides.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { SettlementsModule } from './modules/settlements/settlements.module';
import { CountriesModule } from './modules/countries/countries.module';

@Module({
  imports: [
    configModule,
    databaseModule,
    cacheModule,
    AuthModule,
    InvolvementsModule,
    RidesModule,
    OrganizationsModule,
    CountriesModule,
    SettlementsModule,
  ],
  controllers: [],
  providers: [MailingService],
})
export class AppModule {}
