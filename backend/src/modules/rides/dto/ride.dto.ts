import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsUUID, Validate } from 'class-validator';
import { IsBeforeConstraint } from 'src/shared/decorators/is-before.decorator';
import { IsLineString } from 'src/shared/decorators/is-line-string.decorator';

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

  @ApiProperty({
    description:
      'Route curve. Matrix value with array of coords. First element is longitude, second - latitude. Example: [[-118.4079, 33.9434], [2.5559, 49.0083]]',
    type: 'array',
    items: {
      type: 'array',
      items: { type: 'number', minLength: 2, maxLength: 2 },
    },
  })
  @IsLineString()
  routeCurve: number[][];
}
