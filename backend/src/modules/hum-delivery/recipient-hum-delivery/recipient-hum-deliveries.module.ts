import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsRepository } from 'src/modules/organizations/db/organizations.repository';
import { HumDeliveriesRepository } from '../db/hum-deliveries.repository';
import { RecipientHumDeliveriesController } from './recipient-hum-deliveries.controller';
import { RecipientHumDeliveriesService } from './recipient-hum-deliveries.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      HumDeliveriesRepository,
      OrganizationsRepository,
    ]),
  ],
  controllers: [RecipientHumDeliveriesController],
  providers: [RecipientHumDeliveriesService],
})
export class RecipientHumDeliveriesModule {}
