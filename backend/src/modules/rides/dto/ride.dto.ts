import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsUUID, Validate } from 'class-validator';
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
  estDepartureTime: string;

  @ApiProperty()
  @IsDateString()
  estArrivalTime: string;
}
