import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { DonationItemDto } from './donation-item.dto';

export class CreateDonationRequestDto {
  @ApiProperty()
  @IsUUID()
  deliveryTypeId: string;

  @ApiProperty()
  @IsUUID()
  hubReceiverId: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @Type(() => DonationItemDto)
  @ValidateNested({ each: true })
  items: DonationItemDto[];
}
