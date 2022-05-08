import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  status: string;
}
