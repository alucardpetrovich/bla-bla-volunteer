import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ContactDto } from './contact.dto';

export class OrganizationDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address = '';

  @ApiProperty()
  @IsUUID()
  settlementId: string;

  @ApiProperty({ type: ContactDto, isArray: true })
  @Type(() => ContactDto)
  @ValidateNested()
  contacts: ContactDto[];
}
