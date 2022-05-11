import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, Max } from 'class-validator';

export class PaginationDto {
  @ApiProperty()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  page: number;

  @ApiProperty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  @Max(100)
  pageSize: number;

  getOffset(): number {
    return (this.page - 1) * this.pageSize;
  }

  getLimit(): number {
    return this.pageSize;
  }
}
