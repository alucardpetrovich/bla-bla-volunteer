import { EntityRepository, Repository } from 'typeorm';
import { SettlementSearchParams } from '../types/settlement-search-params.interface';
import { SettlementEntity } from './settlement.entity';

@EntityRepository(SettlementEntity)
export class SettlementsRepository extends Repository<SettlementEntity> {
  async searchSettlements(params: SettlementSearchParams) {
    return this.createQueryBuilder('s')
      .innerJoinAndSelect('s.name', 'sn')
      .innerJoinAndSelect('sn.localizations', 'snl')
      .innerJoinAndSelect('s.district', 'sd')
      .innerJoinAndSelect('sd.name', 'sdn')
      .innerJoinAndSelect('sdn.localizations', 'sdnl')
      .innerJoinAndSelect('s.region', 'sr')
      .innerJoinAndSelect('sr.name', 'srn')
      .innerJoinAndSelect('srn.localizations', 'srnl')

      .where('snl.language = :language')
      .andWhere('sdnl.language = :language')
      .andWhere('srnl.language = :language')

      .andWhere('snl.text ILIKE :query')
      .offset(params.offset)
      .limit(params.limit)
      .orderBy('snl.text = :name', 'DESC')
      .addOrderBy('snl.text ILIKE :startsWith', 'DESC')

      .setParameter('query', `%${params.query}%`)
      .setParameter('startsWith', `${params.query}%`)
      .setParameter('name', params.query)
      .setParameter('language', params.language)

      .getMany();
  }

  async getSettlementByIds(ids: string[], language: string) {
    return this.createQueryBuilder('s')
      .innerJoinAndSelect('s.name', 'sn')
      .innerJoinAndSelect('sn.localizations', 'snl')
      .where('snl.language = :language')
      .andWhere('s.id IN (:...ids)', { ids })
      .setParameter('language', language)
      .getMany();
  }
}
