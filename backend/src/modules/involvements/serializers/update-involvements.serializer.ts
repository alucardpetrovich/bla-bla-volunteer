import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { UserSerializer } from 'src/modules/users/serializers/user.serializer';

export class UpdateInvolvementsSerializer {
  @ApiProperty()
  @Type(() => UserSerializer)
  @Expose()
  user: UserSerializer;
}
