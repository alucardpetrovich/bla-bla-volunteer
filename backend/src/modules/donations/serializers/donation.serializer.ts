import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { DeliveryTypeSerializer } from 'src/modules/delivery/serializers/delivery-type.serializer';
import { OrganizationSerializer } from 'src/modules/organizations/serializers/organization.serializer';
import { UserSerializer } from 'src/modules/users/serializers/user.serializer';
import { DonationRequestStatuses } from '../types/donation-request-statuses.enum';
import { DeliveryInfoBlockSerializer } from './delivery-info-block.serializer';

export class DonationSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty({ enum: DonationRequestStatuses })
  @Expose()
  status: DonationRequestStatuses;

  @ApiProperty()
  @Expose()
  @Type(() => UserSerializer)
  donor: UserSerializer;

  @ApiProperty()
  @Expose()
  @Type(() => DeliveryTypeSerializer)
  deliveryType: DeliveryTypeSerializer;

  @ApiProperty()
  @Expose()
  @Type(() => OrganizationSerializer)
  hubReceiver: OrganizationSerializer;

  @ApiProperty({ type: DeliveryInfoBlockSerializer, isArray: true })
  @Expose()
  @Type(() => DeliveryInfoBlockSerializer)
  receiverDeliveryInfo: DeliveryInfoBlockSerializer[];
}
