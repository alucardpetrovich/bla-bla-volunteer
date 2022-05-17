import { EntityRepository, Repository } from 'typeorm';
import { SettlementTypeEntity } from './settlement-type.entity';

@EntityRepository(SettlementTypeEntity)
export class SettlementTypesRepository extends Repository<SettlementTypeEntity> {}
