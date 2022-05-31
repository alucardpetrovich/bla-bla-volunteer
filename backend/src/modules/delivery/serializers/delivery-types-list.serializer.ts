import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { DeliveryTypeSerializer } from './delivery-type.serializer';

export class DeliveryTypesListSerializer {
  @ApiProperty()
  @Type(() => DeliveryTypeSerializer)
  @Expose()
  types: DeliveryTypeSerializer[];
}
