import { EntityRepository, Repository } from 'typeorm';
import { OrganizationEntity } from '../enitities/organization.entity';

@EntityRepository(OrganizationEntity)
export class OrganizationsRepository extends Repository<OrganizationEntity> {}
