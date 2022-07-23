import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { ContactDto } from 'src/modules/contacts/dto/contact.dto';

export class SetCurrentUserSettingsDto {
  @ApiProperty({ type: ContactDto, isArray: true })
  @Type(() => ContactDto)
  @ValidateNested({ each: true })
  contacts: ContactDto[];

  @ApiProperty()
  @IsOptional()
  nickname?: string;

  @ApiProperty()
  @IsString({ each: true })
  involvements: string[];
}
