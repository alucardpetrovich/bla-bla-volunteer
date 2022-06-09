import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { HubWarehouseItemRelations } from '../types/hub-warehouse-item-relations.enum';
import { HubWarehouseItemsSearchParams } from '../types/hub-warehouse-items-search-params.interface';
import { HubWarehouseItemEntity } from './hub-warehouse-item.entity';

@EntityRepository(HubWarehouseItemEntity)
export class HubWarehouseItemsRepository extends Repository<HubWarehouseItemEntity> {
  async findById(
    id: string,
    language: string,
    relations: HubWarehouseItemRelations[],
  ) {
    const query = this.createQueryBuilder('hwi');
    this.addRelations(query, relations);

    return query
      .andWhere('hwi.id = :id', { id })
      .setParameter('language', language)

      .getOne();
  }

  async findItems(params: HubWarehouseItemsSearchParams) {
    const query = this.createQueryBuilder('hwi');
    this.addRelations(query, params.relations);

    query
      .setParameter('language', params.language)
      .offset(params.offset)
      .limit(params.limit)

      .getMany();
  }

  private addRelations(
    query: SelectQueryBuilder<HubWarehouseItemEntity>,
    relations: HubWarehouseItemRelations[],
  ) {
    if (relations.includes(HubWarehouseItemRelations.HUB)) {
      query.innerJoinAndSelect('hwi.hub', 'hwih');
    }
    if (relations.includes(HubWarehouseItemRelations.PRODUCT)) {
      query
        .innerJoinAndSelect('hwi.product', 'p')
        .innerJoinAndSelect('p.name', 'pn')
        .innerJoinAndSelect('pn.localizations', 'pnl')
        .innerJoinAndSelect('p.category', 'pc')
        .innerJoinAndSelect('pc.name', 'pcn')
        .innerJoinAndSelect('pcn.localizations', 'pcnl')
        .andWhere('pnl.language = :language')
        .andWhere('pcnl.language = :language');
    }
  }
}
