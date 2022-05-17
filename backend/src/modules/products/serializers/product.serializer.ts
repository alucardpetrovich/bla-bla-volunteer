import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { ExposeTranslation } from 'src/shared/decorators/transform-obj.decorator';

export class ProductSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @ExposeTranslation('name')
  name: string;

  @ApiProperty()
  @ExposeTranslation('category.name')
  categoryName: string;

  @ApiProperty()
  @Transform(({ obj }) => obj.imagePath)
  @Expose()
  imageUrl: string;
}
