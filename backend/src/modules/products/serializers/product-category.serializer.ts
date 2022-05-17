import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ExposeTranslation } from 'src/shared/decorators/transform-obj.decorator';

export class ProductCategorySerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  category: string;

  @ApiProperty()
  @ExposeTranslation('name')
  name: string;
}
