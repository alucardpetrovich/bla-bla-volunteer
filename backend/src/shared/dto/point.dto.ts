import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class PointDto {
  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  lon: number;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  lat: number;
}
