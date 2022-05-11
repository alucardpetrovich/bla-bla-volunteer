import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { ContactTypesRepository } from './repositories/contact-types.repository';
import { OrganizationContactsRepository } from './repositories/organization-contacts.repository';
import { OrganizationTypesRepository } from './repositories/organization-types.repository';
import { OrganizationsRepository } from './repositories/organizations.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrganizationsRepository,
      OrganizationTypesRepository,
      ContactTypesRepository,
      OrganizationContactsRepository,
    ]),
  ],
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
