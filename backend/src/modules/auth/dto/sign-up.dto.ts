import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { AccessModes } from 'src/modules/contacts/types/access-modes.enum';

export class SignUpDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  nickname?: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  @IsString()
  @ValidateIf((obj: SignUpDto) => Boolean(obj.phoneNumberAccessMode))
  phoneNumber?: string;

  @ApiProperty({ required: false, enum: AccessModes, enumName: 'AccessModes' })
  @IsEnum(AccessModes)
  @ValidateIf((obj) => Boolean(obj.phoneNumber))
  phoneNumberAccessMode?: AccessModes;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  recaptchaResponse: string;
}
