import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { SettlementSerializer } from 'src/modules/settlements/serializers/settlement.serializer';
import { ExposeTranslation } from 'src/shared/decorators/transform-obj.decorator';
import { OrganizationContactSerializer } from './contact.serializer';

export class OrganizationSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @ExposeTranslation('name')
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

  @ApiProperty()
  @Expose()
  @Type(() => SettlementSerializer)
  settlement: SettlementSerializer;

  @ApiProperty({ type: OrganizationContactSerializer, isArray: true })
  @Type(() => OrganizationContactSerializer)
  @Expose()
  contacts: OrganizationContactSerializer[];
}
