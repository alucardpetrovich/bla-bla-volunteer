import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { UserInvolvementSerializer } from 'src/modules/involvements/serializers/user-involvement.serializer';

export class UserSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  nickname: string;

  @ApiProperty()
  @Expose()
  status: string;

  @ApiProperty()
  @Type(() => UserInvolvementSerializer)
  @Expose()
  involvements: UserInvolvementSerializer[] = [];
}
