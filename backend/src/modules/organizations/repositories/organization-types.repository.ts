import { EntityRepository, Repository } from 'typeorm';
import { OrganizationTypeEntity } from '../enitities/organization-type.entity';

@EntityRepository(OrganizationTypeEntity)
export class OrganizationTypesRepository extends Repository<OrganizationTypeEntity> {}
