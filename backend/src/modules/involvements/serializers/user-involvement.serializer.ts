import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserInvolvementSerializer {
  @ApiProperty()
  @Expose()
  type: string;

  @ApiProperty()
  @Expose()
  verified: boolean;
}
