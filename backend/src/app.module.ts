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
import { ProductsModule } from './modules/products/products.module';
import { DictionaryModule } from './modules/dictionary/dictionary.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { DonationsModule } from './modules/donations/donations.module';
import { DeliveryModule } from './modules/delivery/delivery.module';

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
    ProductsModule,
    DictionaryModule,
    ContactsModule,
    DonationsModule,
    DeliveryModule,
  ],
  controllers: [],
  providers: [MailingService],
})
export class AppModule {}
