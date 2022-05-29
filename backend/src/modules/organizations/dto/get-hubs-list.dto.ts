import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PointDto } from 'src/shared/dto/point.dto';

export class GetHubsListDto {
  @ApiProperty({ required: false })
  @Type(() => PointDto)
  @ValidateNested()
  @IsOptional()
  point?: PointDto;

  @ApiProperty()
  @Type(() => PaginationDto)
  @ValidateNested()
  pagination: PaginationDto;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search?: string;
}
