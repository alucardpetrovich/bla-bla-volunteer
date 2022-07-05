import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { PointDto } from 'src/shared/dto/point.dto';

export class GetHubsListDto {
  @ApiProperty({ required: false })
  @Type(() => PointDto)
  @ValidateNested()
  @ValidateIf((obj: GetHubsListDto) => Boolean(obj.radiusInKm))
  point?: PointDto;

  @ApiProperty({ required: false })
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  @ValidateIf((obj: GetHubsListDto) => Boolean(obj.point))
  radiusInKm?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  onlyCountDebugRun = false;
}
