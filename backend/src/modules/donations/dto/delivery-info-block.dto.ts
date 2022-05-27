import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeliveryInfoBlockDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  value: string;
}
