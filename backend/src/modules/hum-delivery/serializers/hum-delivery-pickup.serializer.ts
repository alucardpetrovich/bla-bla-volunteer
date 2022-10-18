import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { OrganizationEntity } from 'src/modules/organizations/db/organization.entity';
import { DeliveryPickupStatuses } from '../types/delivery-pickup-statuses.enum';
import { HumDeliveryPickupItemSerializer } from './hum-delivery-pickup-item.serializer';

export class HumDeliveryPickupSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  deliveryId: string;

  @ApiProperty()
  @Expose()
  hubId: string;

  @ApiProperty({ enum: DeliveryPickupStatuses })
  @Expose()
  status: DeliveryPickupStatuses;

  @ApiProperty()
  @Expose()
  estPickupTime: Date | null;

  @ApiProperty()
  @Expose()
  actualPickupTime: Date | null;

  @ApiProperty()
  @Expose()
  hubComment: string;

  @ApiProperty()
  @Type(() => OrganizationEntity)
  @Expose()
  hub: OrganizationEntity;

  @ApiProperty({ type: HumDeliveryPickupItemSerializer, isArray: true })
  @Type(() => HumDeliveryPickupItemSerializer)
  @Expose()
  items: HumDeliveryPickupItemSerializer[];
}
