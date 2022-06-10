import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class RecipientNeedDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  desiredQuantity: number;

  @ApiProperty()
  @IsString()
  units: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;
}
