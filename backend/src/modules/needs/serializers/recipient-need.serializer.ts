import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { OrganizationSerializer } from 'src/modules/organizations/serializers/organization.serializer';
import { ProductSerializer } from 'src/modules/products/serializers/product.serializer';

export class RecipientNeedSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  recipientId: string;

  @ApiProperty()
  @Type(() => OrganizationSerializer)
  @Expose()
  recipient: OrganizationSerializer;

  @ApiProperty()
  @Expose()
  productId: string;

  @ApiProperty()
  @Type(() => ProductSerializer)
  @Expose()
  product: ProductSerializer;

  @ApiProperty()
  @Expose()
  quantity: number;

  @ApiProperty()
  @Expose()
  desiredQuantity: number;

  @ApiProperty()
  @Expose()
  units: string;

  @ApiProperty()
  @Expose()
  description: string;
}
