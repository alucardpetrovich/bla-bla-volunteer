import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { DonationRequestStatuses } from '../types/donation-request-statuses.enum';

export class DonorUpdateDonationRequestDto {
  @ApiProperty()
  @IsEnum(DonationRequestStatuses)
  status: DonationRequestStatuses;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @ValidateIf((obj) => obj.status === DonationRequestStatuses.CANCELLED)
  statusText?: string;
}
