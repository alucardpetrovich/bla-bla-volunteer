import { EntityRepository, Repository } from 'typeorm';
import { DonationRequestEntity } from './donation-request.entity';

@EntityRepository(DonationRequestEntity)
export class DonationRequestsRepository extends Repository<DonationRequestEntity> {}
