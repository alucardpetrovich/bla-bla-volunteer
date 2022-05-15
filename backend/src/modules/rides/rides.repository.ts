import { EntityRepository, In, Repository } from 'typeorm';
import { RideEntity } from './ride.entity';
import { RideStatuses } from './types/ride-statuses.enum';

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
}
