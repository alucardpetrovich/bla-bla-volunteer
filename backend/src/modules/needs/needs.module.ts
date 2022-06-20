import { Module } from '@nestjs/common';
import { NeedsService } from './needs.service';
import { NeedsController } from './needs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipientNeedsRepository } from './db/recipient-needs.repository';
import { OrganizationsRepository } from '../organizations/db/organizations.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RecipientNeedsRepository,
      OrganizationsRepository,
    ]),
  ],
  providers: [NeedsService],
  controllers: [NeedsController],
})
export class NeedsModule {}
