import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ProductSerializer } from 'src/modules/products/serializers/product.serializer';

export class HumDeliveryItemReceivedSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  deliveryId: string;

  @ApiProperty()
  @Expose()
  productId: string;

  @ApiProperty()
  @Expose()
  received: boolean;

  @ApiProperty()
  @Expose()
  estQuantity: number;

  @ApiProperty()
  @Expose()
  actualQuantity: number | null;

  @ApiProperty()
  @Expose()
  units: string;

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  driverComment: string;

  @ApiProperty()
  @Expose()
  recipientComment: string;

  @ApiProperty()
  @Type(() => ProductSerializer)
  @Expose()
  product: ProductSerializer;
}
