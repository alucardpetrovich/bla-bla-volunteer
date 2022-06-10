import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { RecipientNeedRelations } from '../types/recipient-need-relations.enum';
import { RecipientNeedsSearchParams } from '../types/recipient-needs-search-params.interface';
import { RecipientNeedEntity } from './recipient-need.entity';

@EntityRepository(RecipientNeedEntity)
export class RecipientNeedsRepository extends Repository<RecipientNeedEntity> {
  async findById(
    id: string,
    language: string,
    relations: RecipientNeedRelations[],
  ) {
    const query = this.createQueryBuilder('rn');
    this.addRelations(query, relations);

    return query
      .andWhere('rn.id = :id', { id })
      .setParameter('language', language)

      .getOne();
  }

  async findNeeds(params: RecipientNeedsSearchParams) {
    const query = this.createQueryBuilder('rn');
    this.addRelations(query, params.relations);

    query
      .andWhere('rn."recipientId" = :recipientId', {
        recipientId: params.recipientId,
      })
      .setParameter('language', params.language)
      .offset(params.offset)
      .limit(params.limit)

      .getMany();
  }

  private addRelations(
    query: SelectQueryBuilder<RecipientNeedEntity>,
    relations: RecipientNeedRelations[],
  ) {
    if (relations.includes(RecipientNeedRelations.RECIPIENT)) {
      query.innerJoinAndSelect('rn.recipient', 'rnr');
    }
    if (relations.includes(RecipientNeedRelations.PRODUCT)) {
      query
        .innerJoinAndSelect('rn.product', 'p')
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
