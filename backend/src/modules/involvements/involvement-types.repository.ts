import { EntityRepository, Repository } from 'typeorm';
import { InvolvementTypeEntity } from './involvement-type.entity';

@EntityRepository(InvolvementTypeEntity)
export class InvolvementTypesRepository extends Repository<InvolvementTypeEntity> {}
