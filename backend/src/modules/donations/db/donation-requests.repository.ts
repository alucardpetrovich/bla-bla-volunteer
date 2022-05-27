import { EntityRepository, Repository } from 'typeorm';
import { DonationRequestEntity } from './donation-request.entity';

@EntityRepository(DonationRequestEntity)
export class DonationRequestsRepository extends Repository<DonationRequestEntity> {
  async findUserDonationRequests(
    donorId: string,
    skip: number,
    take: number,
    relations: string[],
  ) {
    return this.find({
      where: { donorId },
      skip,
      take,
      relations,
      order: { createdAt: 'DESC' },
    });
  }

  async findHubDonationRequests(
    hubReceiverId: string,
    skip: number,
    take: number,
    relations: string[],
  ) {
    return this.find({
      where: { hubReceiverId },
      skip,
      take,
      relations,
      order: { createdAt: 'DESC' },
    });
  }
}
