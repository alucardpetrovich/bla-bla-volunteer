import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class DeliveryInfoBlockSerializer {
  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  value: string;
}
