import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonationRequestsRepository } from './db/donation-requests.repository';
import { DonorDonationsController } from './donor-donations.controller';
import { DonorDonationsService } from './donor-donations.service';
import { HubDonationsController } from './hub-donations.controller';
import { HubDonationsService } from './hub-donations.service';

@Module({
  imports: [TypeOrmModule.forFeature([DonationRequestsRepository])],
  controllers: [DonorDonationsController, HubDonationsController],
  providers: [DonorDonationsService, HubDonationsService],
})
export class DonationsModule {}
