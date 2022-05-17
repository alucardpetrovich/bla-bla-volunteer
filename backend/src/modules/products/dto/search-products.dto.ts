import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsString, IsUUID, Min, MinLength } from 'class-validator';

export class SearchProductsDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  query: string;

  @ApiProperty()
  @IsUUID()
  categoryId: string;

  @ApiPropertyOptional()
  @Transform(({ value }) => parseInt(value || 1))
  @IsInt()
  @Min(1)
  page: number;
}
