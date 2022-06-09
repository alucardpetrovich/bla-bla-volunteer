import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ExposeTranslation } from 'src/shared/decorators/transform-obj.decorator';
import { Column } from 'typeorm';

export class DeliveryTypeSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @Column()
  @Expose()
  type: string;

  @Column()
  @Expose()
  requiredDeliveryInfo: string;

  @Column()
  @ExposeTranslation('name')
  name: string;
}
