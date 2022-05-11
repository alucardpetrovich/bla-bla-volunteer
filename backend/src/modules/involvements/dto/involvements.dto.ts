import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class InvolvementsDto {
  @ApiProperty()
  @IsString({ each: true })
  involvements: string[];
}
