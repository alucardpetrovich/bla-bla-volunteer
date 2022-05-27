import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { DonationRequestStatuses } from '../types/donation-request-statuses.enum';
import { DeliveryInfoBlockDto } from './delivery-info-block.dto';

export class HubUpdateDonationRequestDto {
  @ApiProperty({ enum: DonationRequestStatuses })
  @IsEnum(DonationRequestStatuses)
  status: DonationRequestStatuses;

  @ApiProperty({ required: false })
  @Type(() => DeliveryInfoBlockDto)
  @ValidateNested({ each: true })
  @ValidateIf((obj) => obj.status === DonationRequestStatuses.APPROVED)
  deliveryInfo?: DeliveryInfoBlockDto[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @ValidateIf((obj) => obj.status === DonationRequestStatuses.REJECTED)
  statusText?: string;
}
