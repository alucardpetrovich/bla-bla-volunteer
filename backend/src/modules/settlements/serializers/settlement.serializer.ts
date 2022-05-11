import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ExposeLocation } from 'src/shared/decorators/expose-location.decorator';
import { LocationSerializer } from 'src/shared/serializers/location.serializer';

export class SettlementSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  type: string;

  @ApiProperty()
  @ExposeLocation()
  centerLocation: LocationSerializer;
}
