import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { OrganizationContactSerializer } from './contact.serializer';

export class OrganizationSerializer {
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
  @Expose()
  address: string;

  @ApiProperty()
  @Expose()
  settlementId: string;

  @ApiProperty({ type: OrganizationContactSerializer, isArray: true })
  @Type(() => OrganizationContactSerializer)
  @Expose()
  contacts: OrganizationContactSerializer[];
}
