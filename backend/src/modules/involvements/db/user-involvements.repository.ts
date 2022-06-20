import { EntityRepository, In, Repository } from 'typeorm';
import { UserInvolvementEntity } from './user-involvement.entity';

@EntityRepository(UserInvolvementEntity)
export class UserInvolvementsRepository extends Repository<UserInvolvementEntity> {
  async addInvolvements(userId: string, types: string[]) {
    return this.save(types.map((type) => ({ userId, type, verified: false })));
  }

  async removeInvolvements(ids: string[]) {
    if (!ids.length) {
      return;
    }

    return this.delete({ id: In(ids) });
  }
}
