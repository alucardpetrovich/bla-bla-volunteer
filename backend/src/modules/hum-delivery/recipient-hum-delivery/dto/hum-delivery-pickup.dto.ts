import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';
import { HumDeliveryItemDto } from './hum-delivery-item.dto';

export class HumDeliveryPickupDto {
  @ApiProperty()
  @IsUUID()
  hubId: string;

  @ApiProperty({ type: HumDeliveryItemDto, isArray: true })
  @Type(() => HumDeliveryItemDto)
  @ValidateNested({ each: true })
  items: HumDeliveryItemDto[];
}
