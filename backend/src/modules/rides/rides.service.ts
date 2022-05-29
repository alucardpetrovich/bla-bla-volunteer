import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  EntityLocksConfig,
  entityLocksConfig,
} from 'src/config/entity-locks.config';
import { ChangeRideStatusDto } from './dto/change-ride-status.dto';
import { RideDto } from './dto/ride.dto';
import { RideRelations } from './db/ride.entity';
import { RidesRepository } from './db/rides.repository';
import { RideStatuses } from './types/ride-statuses.enum';
import { GetRidesListDto } from './dto/get-rides-list.dto';

@Injectable()
export class RidesService {
  private relationsToFetch = [
    RideRelations.ARRIVAL_SETTLEMENT,
    RideRelations.DEPARTURE_SETTLEMENT,
  ];

  constructor(
    @InjectRepository(RidesRepository) private ridesRepository: RidesRepository,
    @Inject(entityLocksConfig.KEY)
    private entityLocksConfig: EntityLocksConfig,
  ) {}

  async createRide(userId: string, dto: RideDto) {
    const [overlappingRidesCount, unfinishedRidesCount] = await Promise.all([
      this.ridesRepository.countOverlappingRides(
        userId,
        dto.estDepartureTime,
        dto.estArrivalTime,
      ),
      this.ridesRepository.countUnfinishedRides(userId),
    ]);
    if (overlappingRidesCount) {
      throw new ConflictException('Overlapping rides found');
    }
    if (unfinishedRidesCount >= this.entityLocksConfig.maxUnfinishedRides) {
      throw new ForbiddenException('Too many unfinished rides');
    }

    const ride = await this.ridesRepository.save({
      ...dto,
      status: RideStatuses.SCHEDULED,
      driverId: userId,
    });

    return this.ridesRepository.findOne(ride.id, {
      relations: this.relationsToFetch,
    });
  }

  async getRidesList(dto: GetRidesListDto) {
    const { pagination } = dto;
    return this.ridesRepository.find({
      skip: pagination.getOffset(),
      take: pagination.getLimit(),
      relations: this.relationsToFetch,
    });
  }

  async getRideById(id: string) {
    const ride = await this.ridesRepository.findOne(id);
    if (!ride) {
      throw new NotFoundException(`Ride with id '${id}' not found`);
    }

    return ride;
  }

  async updateRide(id: string, userId: string, dto: RideDto) {
    const [ride, overlappingRidesCount] = await Promise.all([
      this.ridesRepository.findOne({ id, driverId: userId }),
      this.ridesRepository.countOverlappingRides(
        userId,
        dto.estDepartureTime,
        dto.estArrivalTime,
        id,
      ),
    ]);
    if (!ride) {
      throw new NotFoundException('Ride not found');
    }
    if (ride.status !== RideStatuses.SCHEDULED) {
      throw new ForbiddenException('Ride is already in unchangeable state');
    }
    if (overlappingRidesCount) {
      throw new ConflictException('Overlapping rides found');
    }

    await this.ridesRepository.save({
      ...ride,
      ...dto,
    });

    return this.ridesRepository.findOne(ride.id, {
      relations: this.relationsToFetch,
    });
  }

  async changeRideStatus(id: string, userId: string, dto: ChangeRideStatusDto) {
    const ride = await this.ridesRepository.findOne({ id, driverId: userId });
    if (!ride) {
      throw new NotFoundException('Ride not found');
    }
    const allowedStatusTransitionsByCurrentStatus = {
      [RideStatuses.CANCELLED]: [],
      [RideStatuses.FINISHED]: [],
      [RideStatuses.IN_PROGRESS]: [RideStatuses.FINISHED],
      [RideStatuses.SCHEDULED]: [
        RideStatuses.CANCELLED,
        RideStatuses.FINISHED,
        RideStatuses.IN_PROGRESS,
      ],
    };
    const allowedStatusTransitions =
      allowedStatusTransitionsByCurrentStatus[ride.status];

    if (!allowedStatusTransitions.includes(dto.newStatus)) {
      throw new ForbiddenException(
        `Transition from '${ride.status}' to '${dto.newStatus}' is not allowed`,
      );
    }

    await this.ridesRepository.save({
      ...ride,
      status: dto.newStatus,
    });

    return this.ridesRepository.findOne(ride.id, {
      relations: this.relationsToFetch,
    });
  }
}
