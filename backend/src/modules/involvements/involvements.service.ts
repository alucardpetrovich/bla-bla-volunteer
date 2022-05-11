import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRelations } from '../users/user.entity';
import { UsersRepository } from '../users/users.repository';
import { InvolvementsDto } from './dto/involvements.dto';
import { InvolvementTypesRepository } from './involvement-types.repository';
import { UserInvolvementsRepository } from './user-involvements.repository';

@Injectable()
export class InvolvementsService {
  constructor(
    @InjectRepository(UserInvolvementsRepository)
    private userInvolvementsRepository: UserInvolvementsRepository,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    @InjectRepository(InvolvementTypesRepository)
    private involvementTypesRepository: InvolvementTypesRepository,
  ) {}

  async getInvolvementTypes() {
    const types = await this.involvementTypesRepository.find();
    return types.map((t) => t.type);
  }

  async updateInvolvements(userId: string, dto: InvolvementsDto) {
    const involvements = await this.userInvolvementsRepository.find({ userId });
    const idsToRemove = involvements
      .filter((oldInv) => !dto.involvements.includes(oldInv.type))
      .map((inv) => inv.id);
    const typesToAdd = dto.involvements.filter(
      (newInv) => !involvements.find((oldInv) => oldInv.type === newInv),
    );

    await this.userInvolvementsRepository.addInvolvements(userId, typesToAdd);
    await this.userInvolvementsRepository.removeInvolvements(idsToRemove);

    return this.usersRepository.findOne(userId, {
      relations: [UserRelations.INVOLVEMENTS],
    });
  }
}
