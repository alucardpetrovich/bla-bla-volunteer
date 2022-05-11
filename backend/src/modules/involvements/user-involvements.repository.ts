import { EntityRepository, In, Repository } from 'typeorm';
import { UserInvolvementEntity } from './user-involvement.entity';

@EntityRepository(UserInvolvementEntity)
export class UserInvolvementsRepository extends Repository<UserInvolvementEntity> {
  async addInvolvements(userId: string, types: string[]) {
    return this.save(types.map((type) => ({ userId, type })));
  }

  async removeInvolvements(ids: string[]) {
    return this.delete({ type: In(ids) });
  }
}
