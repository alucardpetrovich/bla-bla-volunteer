import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { SettlementSerializer } from 'src/modules/settlements/serializers/settlement.serializer';

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
