import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import {
  HubsBySettlementsCount,
  HubsCountBySettlementId,
} from '../types/hubs-by-settlements-count.class';
import { HubsSearchParams } from '../types/hubs-search-params.interface';
import { OrganizationRelations } from '../types/organization-relations.enum';
import { OrganizationTypes } from '../types/organization-types.enum';
import { OrganizationEntity } from './organization.entity';

@EntityRepository(OrganizationEntity)
export class OrganizationsRepository extends Repository<OrganizationEntity> {
  async findOrganizationById(
    id: string,
    language: string,
    userId: string,
    relations: OrganizationRelations[],
  ) {
    const query = this.createQueryBuilder('o');
    this.addRelations(query, relations);

    return query
      .andWhere('o.id = :id')

      .setParameter('id', id)
      .setParameter('language', language)
      .setParameter('userId', userId)

      .getOne();
  }

  async findHubsList(params: HubsSearchParams) {
    const query = this.createQueryBuilder('o');

    this.addRelations(query, params.relations);
    query.andWhere('o.type IN (:...types)');
    this.setHubSearchWheres(params, query);

    return query
      .setParameter('language', params.language)
      .setParameter('userId', params.userId)
      .getMany();
  }

  async countHubsBySettlements(
    params: HubsSearchParams,
  ): Promise<HubsCountBySettlementId[]> {
    const query = this.createQueryBuilder('o')
      .select([`COUNT(*) AS "hubsCount"`, `os.id AS "settlementId"`])
      .innerJoin('o.settlement', 'os');

    this.setHubSearchWheres(params, query);

    return query
      .setParameter('language', params.language)
      .groupBy('os.id')
      .getRawMany();
  }

  private setHubSearchWheres(
    params: HubsSearchParams,
    query: SelectQueryBuilder<OrganizationEntity>,
  ) {
    query.andWhere('o.type IN (:...types)');

    if (params.search) {
      query
        .andWhere('o.name ILIKE :query')

        .orderBy('o.name = :name', 'DESC')
        .addOrderBy('o.name ILIKE :startsWith', 'DESC')

        .setParameter('query', `%${params.search}%`)
        .setParameter('startsWith', `${params.search}%`)
        .setParameter('name', params.search);
    }
    if (params.point) {
      query
        .andWhere(
          `ST_Distance(ST_GeomFromGeoJSON(:point), os."centerLocation") < :radius`,
        )

        .setParameter(
          'point',
          JSON.stringify({
            type: 'Point',
            coordinates: [params.point.lon, params.point.lat],
          }),
        )
        .setParameter('radius', params.radius);
    }

    query.setParameter('types', [
      OrganizationTypes.HUB,
      OrganizationTypes.MOBILE_HUB,
    ]);
  }

  private addRelations(
    query: SelectQueryBuilder<OrganizationEntity>,
    relations: OrganizationRelations[],
  ) {
    if (relations.includes(OrganizationRelations.SETTLEMENT_ONLY)) {
      query
        .innerJoinAndSelect('o.settlement', 'os')
        .innerJoinAndSelect('os.name', 'osn')
        .innerJoinAndSelect('osn.localizations', 'osnl')
        .andWhere('osnl.language = :language');
    }
    if (relations.includes(OrganizationRelations.SETTLEMENT)) {
      query
        .innerJoinAndSelect('o.settlement', 'os')
        .innerJoinAndSelect('os.name', 'osn')
        .innerJoinAndSelect('osn.localizations', 'osnl')
        .innerJoinAndSelect('os.district', 'osd')
        .innerJoinAndSelect('osd.name', 'osdn')
        .innerJoinAndSelect('osdn.localizations', 'osdnl')
        .innerJoinAndSelect('os.region', 'osr')
        .innerJoinAndSelect('osr.name', 'osrn')
        .innerJoinAndSelect('osrn.localizations', 'osrnl')
        .andWhere('osnl.language = :language')
        .andWhere('osdnl.language = :language')
        .andWhere('osrnl.language = :language');
    }
    if (relations.includes(OrganizationRelations.CONTACTS)) {
      query.leftJoinAndSelect('o.contacts', 'oc');
    }
    if (relations.includes(OrganizationRelations.CONTACT_ACCESS)) {
      query.leftJoinAndSelect('oc.accesses', 'oca', 'oca."userId" = :userId');
    }
  }
}
