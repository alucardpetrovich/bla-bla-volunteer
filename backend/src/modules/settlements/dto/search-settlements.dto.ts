import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsString, Min, MinLength } from 'class-validator';

export class SearchSettlementsDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  search: string;

  @ApiPropertyOptional()
  @Transform(({ value }) => parseInt(value || 1))
  @IsInt()
  @Min(1)
  page: number;
}
