import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { DonationSerializer } from './donation.serializer';

export class DonationsListSerializer {
  @ApiProperty({ type: DonationSerializer, isArray: true })
  @Type(() => DonationSerializer)
  @Expose()
  donations: DonationSerializer[];
}
