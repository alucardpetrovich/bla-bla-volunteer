import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { SettlementSerializer } from './settlement.serializer';

export class SettlementsListSerializer {
  @ApiProperty()
  @Type(() => SettlementSerializer)
  @Expose()
  settlements: SettlementSerializer[];
}
