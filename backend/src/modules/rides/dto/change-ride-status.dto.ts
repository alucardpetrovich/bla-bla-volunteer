import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { RideStatuses } from '../types/ride-statuses.enum';

export class ChangeRideStatusDto {
  @ApiProperty()
  @IsEnum(RideStatuses)
  newStatus: RideStatuses;
}
