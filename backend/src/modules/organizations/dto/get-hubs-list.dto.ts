import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PointDto } from 'src/shared/dto/point.dto';

export class GetHubsListDto {
  @ApiProperty()
  @Type(() => PointDto)
  @ValidateNested()
  @IsOptional()
  point?: PointDto;

  @ApiProperty()
  @Type(() => PaginationDto)
  @ValidateNested()
  pagination: PaginationDto;

  @ApiProperty()
  @IsString()
  @IsOptional()
  search?: string;
}
