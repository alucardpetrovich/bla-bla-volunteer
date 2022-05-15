import { EntityRepository, Repository } from 'typeorm';
import { SettlementEntity } from './settlement.entity';

@EntityRepository(SettlementEntity)
export class SettlementsRepository extends Repository<SettlementEntity> {
  async searchSettlements(query: string, offset: number, limit: number) {
    return this.createQueryBuilder()
      .where('name ILIKE :query')
      .offset(offset)
      .limit(limit)
      .orderBy('name ILIKE :startsWith', 'DESC')

      .setParameter('query', `%${query}%`)
      .setParameter('startsWith', `${query}%`)

      .getMany();
  }
}
