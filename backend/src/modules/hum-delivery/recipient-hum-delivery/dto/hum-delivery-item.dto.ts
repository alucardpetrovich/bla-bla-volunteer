import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class HumDeliveryItemDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty()
  @IsInt()
  estQuantity: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  units: string;

  @ApiProperty()
  @IsString()
  description = '';
}
