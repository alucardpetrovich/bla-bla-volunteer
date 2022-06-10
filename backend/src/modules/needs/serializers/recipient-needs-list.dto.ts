import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { RecipientNeedSerializer } from './recipient-need.serializer';

export class RecipientNeedsListSerializer {
  @ApiProperty({ type: RecipientNeedSerializer, isArray: true })
  @Type(() => RecipientNeedSerializer)
  @Expose()
  needs: RecipientNeedSerializer[];
}
