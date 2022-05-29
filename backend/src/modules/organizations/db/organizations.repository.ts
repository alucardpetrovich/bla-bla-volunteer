import { EntityRepository, Repository } from 'typeorm';
import { HubsSearchParams } from '../types/hubs-search-params.interface';
import { OrganizationEntity } from './organization.entity';

@EntityRepository(OrganizationEntity)
export class OrganizationsRepository extends Repository<OrganizationEntity> {
  async findHubsList(params: HubsSearchParams) {
    const query = this.createQueryBuilder('o')
      .innerJoinAndSelect('o.name', 'on')
      .innerJoinAndSelect('on.localizations', 'onl')
      .innerJoinAndSelect('o.settlement', 'os')
      .innerJoinAndSelect('os.name', 'osn')
      .innerJoinAndSelect('osn.localizations', 'osnl')

      .where('onl.language = :language')
      .andWhere('osnl.language = :language');
    if (params.search) {
      query
        .andWhere('onl.text ILIKE :query')
        .orderBy('onl.text = :name', 'DESC')
        .addOrderBy('onl.text ILIKE :startsWith', 'DESC')
        .setParameter('query', `%${params.search}%`)
        .setParameter('startsWith', `${params.search}%`)
        .setParameter('name', params.search);
    } else if (params.point) {
      query
        .andWhere(
          `ST_Distance('POINT(:lon :lat)'::geography, os."centerLocation") < :maxDistance`,
        )
        .orderBy(
          `ST_Distance('POINT(:lon :lat)'::geography, os."centerLocation")`,
          'ASC',
        )
        .setParameter('lon', params.point.lon)
        .setParameter('lat', params.point.lat)
        .setParameter('maxDistance', params.maxDistance);
    }

    return query.offset(params.offset).limit(params.limit).getMany();
  }
}
