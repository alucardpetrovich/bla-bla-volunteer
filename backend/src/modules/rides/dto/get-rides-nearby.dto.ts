import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsInt, IsNumber, Max, Min, ValidateNested } from 'class-validator';
import { PaginationDto } from 'src/shared/dto/pagination.dto';

export class GetRidesNearbyListDto {
  @ApiProperty()
  @Type(() => PaginationDto)
  @ValidateNested()
  pagination: PaginationDto;

  @ApiProperty()
  @IsNumber()
  @Min(-180)
  @Max(180)
  @Transform(({ value }) => parseFloat(value))
  lon: number;

  @ApiProperty()
  @IsNumber()
  @Min(-90)
  @Max(90)
  @Transform(({ value }) => parseFloat(value))
  lat: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(100)
  @Transform(({ value }) => parseInt(value))
  searchRadiusInKm: number;
}
