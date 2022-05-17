import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ProductCategorySerializer } from './product-category.serializer';

export class ProductCategoriesListSerializer {
  @ApiProperty({ type: ProductCategorySerializer, isArray: true })
  @Type(() => ProductCategorySerializer)
  @Expose()
  categories: ProductCategorySerializer[];
}
