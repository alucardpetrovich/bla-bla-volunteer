import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDateString, IsUUID, MinDate, Validate } from 'class-validator';
import { IsBeforeConstraint } from 'src/shared/decorators/is-before.decorator';

export class RideDto {
  @ApiProperty()
  @IsUUID()
  departureSettlementId: string;

  @ApiProperty()
  @IsUUID()
  arrivalSettlementId: string;

  @ApiProperty()
  @IsDateString()
  @Validate(IsBeforeConstraint, ['estArrivalTime'])
  @MinDate(new Date())
  @Transform(({ value }) => new Date(value))
  estDepartureTime: Date;

  @ApiProperty()
  @IsDateString()
  @MinDate(new Date())
  @Transform(({ value }) => new Date(value))
  estArrivalTime: Date;
}
