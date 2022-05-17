import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ProductSerializer } from './product.serializer';

export class ProductsListSerializer {
  @ApiProperty({ type: ProductSerializer, isArray: true })
  @Type(() => ProductSerializer)
  @Expose()
  products: ProductSerializer[];
}
