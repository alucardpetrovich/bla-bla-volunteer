import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsUUID,
  MinDate,
  Validate,
} from 'class-validator';
import { IsBeforeConstraint } from 'src/shared/decorators/is-before.decorator';

export class RideDto {
  @ApiProperty()
  @IsUUID()
  departureSettlementId: string;

  @ApiProperty()
  @IsUUID()
  arrivalSettlementId: string;

  @ApiProperty()
  @IsDate()
  @Validate(IsBeforeConstraint, ['estArrivalTime'])
  @MinDate(new Date())
  estDepartureTime: string;

  @ApiProperty()
  @IsDateString()
  @MinDate(new Date())
  estArrivalTime: string;
}
