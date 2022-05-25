import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonationRequestsRepository } from './db/donation-requests.repository';
import { DonationsController } from './donations.controller';
import { DonationsService } from './donations.service';

@Module({
  imports: [TypeOrmModule.forFeature([DonationRequestsRepository])],
  controllers: [DonationsController],
  providers: [DonationsService],
})
export class DonationsModule {}
