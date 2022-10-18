import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { HumDeliveryRelations } from '../types/hum-delivery-relations.enum';
import { HumDeliveryEntity } from './hum-delivery.entity';

@EntityRepository(HumDeliveryEntity)
export class HumDeliveriesRepository extends Repository<HumDeliveryEntity> {
  async findById(
    id: string,
    language: string,
    relations: HumDeliveryRelations[],
  ) {
    const query = this.createQueryBuilder('hd');
    this.addRelations(query, relations);

    return query
      .andWhere('hd.id = :id', { id })
      .setParameter('language', language)

      .getOne();
  }

  private addRelations(
    query: SelectQueryBuilder<HumDeliveryEntity>,
    relations: HumDeliveryRelations[],
  ) {
    if (relations.includes(HumDeliveryRelations.ITEMS_RECEIVED)) {
      query
        .innerJoinAndSelect('hd.itemsReceived', 'hdir')
        .innerJoinAndSelect('hdir.product', 'hdirp')
        .innerJoinAndSelect('hdirp.name', 'hdirpn')
        .innerJoinAndSelect('hdirpn.localizations', 'hdirpnl')
        .andWhere('hdirpnl.language = :language');
    }
    if (relations.includes(HumDeliveryRelations.PICKUPS)) {
      query
        .innerJoinAndSelect('hd.pickups', 'hdp')
        .innerJoinAndSelect('hdp.hub', 'hdph');
    }
    if (relations.includes(HumDeliveryRelations.PICKUP_ITEMS)) {
      query
        .innerJoinAndSelect('hdp.items', 'hdpi')
        .innerJoinAndSelect('hdpi.product', 'hdpip')
        .innerJoinAndSelect('hdpip.name', 'hdpipn')
        .innerJoinAndSelect('hdpipn.localizations', 'hdpipnl')
        .andWhere('hdpipnl.language = :language');
    }
  }
}
