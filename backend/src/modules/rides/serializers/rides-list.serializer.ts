import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { RideSerializer } from './ride.serializer';

export class RidesListSerializer {
  @ApiProperty({ type: RideSerializer, isArray: true })
  @Type(() => RideSerializer)
  @Expose()
  rides: RideSerializer[];
}
