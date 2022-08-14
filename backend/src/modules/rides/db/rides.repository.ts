import { EntityRepository, In, Repository } from 'typeorm';
import { RideEntity } from './ride.entity';
import { RideStatuses } from '../types/ride-statuses.enum';
import { RidesNearbySearchParams } from '../types/rides-nearby-search-params.interface';

@EntityRepository(RideEntity)
export class RidesRepository extends Repository<RideEntity> {
  async countOverlappingRides(
    driverId: string,
    departureTime: string,
    arrivalTime: string,
    excludeId?: string,
  ): Promise<number> {
    const query = this.createQueryBuilder()
      .where('"driverId" = :driverId', { driverId })
      .andWhere('"status" IN (:...statuses)', {
        statuses: [RideStatuses.IN_PROGRESS, RideStatuses.SCHEDULED],
      })
      .andWhere(
        '("estDepartureTime", "estArrivalTime") OVERLAPS (:departureTime, :arrivalTime)',
        { departureTime, arrivalTime },
      );

    if (excludeId) {
      query.andWhere('"id" != :excludeId', { excludeId });
    }

    return query.getCount();
  }

  async countUnfinishedRides(driverId: string): Promise<number> {
    return this.count({
      where: {
        driverId,
        status: In([RideStatuses.IN_PROGRESS, RideStatuses.SCHEDULED]),
      },
    });
  }

  async findRidesNearby(params: RidesNearbySearchParams) {
    return this.createQueryBuilder()
      .where(
        `ST_Distance("routeCurve", ST_GeomFromGeoJSON(:point)) < :radius`,
        {
          point: JSON.stringify({
            type: 'Point',
            coordinates: [params.lon, params.lat],
          }),
          radius: params.searchRadiusInKm * 1000,
        },
      )
      .andWhere('status = :status', { status: RideStatuses.SCHEDULED })

      .offset(params.pagination.offset)
      .limit(params.pagination.limit)
      .getMany();
  }
}
