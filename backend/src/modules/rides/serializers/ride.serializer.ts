import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform, Type } from 'class-transformer';
import { LineString } from 'geojson';
import { SettlementSerializer } from 'src/modules/settlements/serializers/settlement.serializer';
import { RideEntity } from '../db/ride.entity';

export class RideSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  driverId: string;

  @ApiProperty()
  @Expose()
  departureSettlementId: string;

  @ApiProperty()
  @Expose()
  arrivalSettlementId: string;

  @ApiProperty({
    type: 'array',
    items: {
      type: 'array',
      items: { type: 'number', minLength: 2, maxLength: 2 },
    },
  })
  @Transform(({ obj }: { obj: RideEntity }) => obj.routeCurve.coordinates)
  @Expose()
  routeCurve: number[][];

  @ApiProperty()
  @Expose()
  status: string;

  @ApiProperty()
  @Expose()
  estDepartureTime: Date;

  @ApiProperty()
  @Expose()
  estArrivalTime: Date;

  @ApiProperty()
  @Type(() => SettlementSerializer)
  @Expose()
  departureSettlement: SettlementSerializer;

  @ApiProperty()
  @Type(() => SettlementSerializer)
  @Expose()
  arrivalSettlement: SettlementSerializer;
}
