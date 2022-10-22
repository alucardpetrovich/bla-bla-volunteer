import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsUUID, ValidateNested } from 'class-validator';
import { LineString } from 'geojson';
import { HumDeliveryItemDto } from './hum-delivery-item.dto';
import { HumDeliveryPickupDto } from './hum-delivery-pickup.dto';

export class CreateHumDeliveryRequestDto {
  @ApiProperty()
  @IsUUID()
  driverId: string;

  @ApiProperty()
  @IsUUID()
  receiverId: string;

  @ApiProperty()
  @IsDateString()
  estArrivalTime: string;

  @ApiProperty()
  routeCurve: LineString;

  @ApiProperty({ type: HumDeliveryPickupDto, isArray: true })
  @Type(() => HumDeliveryPickupDto)
  @ValidateNested({ each: true })
  pickups: HumDeliveryPickupDto[];

  @ApiProperty({ type: HumDeliveryItemDto, isArray: true })
  @Type(() => HumDeliveryItemDto)
  @ValidateNested({ each: true })
  itemsToReceive: string;
}
