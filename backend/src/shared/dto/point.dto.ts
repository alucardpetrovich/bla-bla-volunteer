import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class PointDto {
  @ApiProperty({ name: 'point[lon]' })
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  lon: number;

  @ApiProperty({ name: 'point[lat]' })
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  lat: number;
}
