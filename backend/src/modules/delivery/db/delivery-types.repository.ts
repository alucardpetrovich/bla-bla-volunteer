import { EntityRepository, Repository } from 'typeorm';
import { DeliveryTypeEntity } from './delivery-type.entity';

@EntityRepository(DeliveryTypeEntity)
export class DeliveryTypesRepository extends Repository<DeliveryTypeEntity> {
  async findDeliveryTypes(language: string) {
    return this.createQueryBuilder('dt')
      .innerJoinAndSelect('dt.name', 'dtn')
      .innerJoinAndSelect('dtn.localizations', 'dtnl')
      .where('dtnl.language = :language', { language })
      .getMany();
  }
}
