import { EntityRepository, Repository } from 'typeorm';
import { OrganizationEntity } from './organization.entity';

@EntityRepository(OrganizationEntity)
export class OrganizationsRepository extends Repository<OrganizationEntity> {}
