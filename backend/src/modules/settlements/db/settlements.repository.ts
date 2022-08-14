import { EntityRepository, Repository } from 'typeorm';
import { SettlementSearchParams } from '../types/settlement-search-params.interface';
import { SettlementEntity } from './settlement.entity';

@EntityRepository(SettlementEntity)
export class SettlementsRepository extends Repository<SettlementEntity> {
  async searchSettlements(params: SettlementSearchParams) {
    return this.createQueryBuilder('s')
      .innerJoinAndSelect('s.name', 'sn')
      .innerJoinAndSelect('sn.localizations', 'snl')
      .leftJoinAndSelect('s.district', 'sd')
      .leftJoinAndSelect('sd.name', 'sdn')
      .leftJoinAndSelect('sdn.localizations', 'sdnl')
      .leftJoinAndSelect('s.region', 'sr')
      .leftJoinAndSelect('sr.name', 'srn')
      .leftJoinAndSelect('srn.localizations', 'srnl')

      .where('snl.language = :language')
      .andWhere('(sdnl.language = :language OR sdnl.language IS NULL)')
      .andWhere('(srnl.language = :language OR srnl.language IS NULL)')

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
