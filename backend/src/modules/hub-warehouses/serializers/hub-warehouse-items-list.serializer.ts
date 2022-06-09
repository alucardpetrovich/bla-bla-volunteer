import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { HubWarehouseItemSerializer } from './hub-warehouse-item.serializer';

export class HubWarehouseItemsListSerializer {
  @ApiProperty({ type: HubWarehouseItemSerializer, isArray: true })
  @Type(() => HubWarehouseItemSerializer)
  @Expose()
  items: HubWarehouseItemSerializer[];
}
