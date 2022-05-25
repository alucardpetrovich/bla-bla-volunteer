import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DonationRequestsRepository } from './db/donation-requests.repository';
import { CreateDonationRequestDto } from './dto/create-donation-request.dto';

@Injectable()
export class DonationsService {
  constructor(
    @InjectRepository(DonationRequestsRepository)
    private donationRequestsRepository: DonationRequestsRepository,
  ) {}

  async createRequest(dto: CreateDonationRequestDto, userId: string) {
    // const activeRequests =
  }
}
