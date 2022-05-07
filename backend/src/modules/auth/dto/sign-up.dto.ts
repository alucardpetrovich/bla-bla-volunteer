import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  // TODO: add complexity validation
  @ApiProperty()
  @IsString()
  password: string;
}
