import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { OrganizationSerializer } from 'src/modules/organizations/serializers/organization.serializer';
import { ProductSerializer } from 'src/modules/products/serializers/product.serializer';

export class HubWarehouseItemSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  hubId: string;

  @ApiProperty()
  @Type(() => OrganizationSerializer)
  @Expose()
  hub: OrganizationSerializer;

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
