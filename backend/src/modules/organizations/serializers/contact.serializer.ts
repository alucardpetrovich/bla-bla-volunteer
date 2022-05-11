import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class OrganizationContactSerializer {
  @ApiProperty()
  @Expose()
  type: string;

  @ApiProperty()
  @Expose()
  value: string;

  @ApiProperty()
  @Expose()
  verified: boolean;
}
