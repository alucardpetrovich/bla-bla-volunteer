import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { AccessModes } from '../types/access-modes.enum';

export class ContactDto {
  @ApiProperty({ type: 'string' })
  @IsEnum(AccessModes)
  accessMode: AccessModes;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  value: string;
}
