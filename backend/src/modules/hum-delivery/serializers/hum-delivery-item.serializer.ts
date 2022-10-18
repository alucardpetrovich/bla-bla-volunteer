import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform, Type } from 'class-transformer';
import { OrganizationSerializer } from 'src/modules/organizations/serializers/organization.serializer';
import { UserSerializer } from 'src/modules/users/serializers/user.serializer';
import { HumDeliveryEntity } from '../db/hum-delivery.entity';
import { DeliveryStatuses } from '../types/delivery-statuses.enum';
import { HumDeliveryItemReceivedSerializer } from './hum-delivery-item-received.serializer';
import { HumDeliveryPickupSerializer } from './hum-delivery-pickup.serializer';

export class HumDeliveryItemSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  driverId: string;

  @ApiProperty()
  @Expose()
  recipientId: string;

  @ApiProperty({ enum: DeliveryStatuses })
  @Expose()
  status: DeliveryStatuses;

  @ApiProperty()
  @Expose()
  estArrivalTime: Date | null;

  @ApiProperty()
  @Expose()
  actualArrivalTime: Date | null;

  @ApiProperty({
    type: 'array',
    items: {
      type: 'array',
      items: { type: 'number', minLength: 2, maxLength: 2 },
    },
  })
  @Transform(
    ({ obj }: { obj: HumDeliveryEntity }) => obj.routeCurve.coordinates,
  )
  @Expose()
  routeCurve: number[][];

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Type(() => UserSerializer)
  @Expose()
  driver: UserSerializer;

  @ApiProperty()
  @Type(() => OrganizationSerializer)
  @Expose()
  recipient: OrganizationSerializer;

  @ApiProperty({ type: HumDeliveryPickupSerializer, isArray: true })
  @Type(() => HumDeliveryPickupSerializer)
  @Expose()
  pickups: HumDeliveryPickupSerializer[];

  @ApiProperty({ type: HumDeliveryItemReceivedSerializer, isArray: true })
  @Type(() => HumDeliveryItemReceivedSerializer)
  @Expose()
  itemsReceived: HumDeliveryItemReceivedSerializer[];
}
