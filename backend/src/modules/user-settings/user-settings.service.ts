import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactsRepository } from '../contacts/db/contacts.repository';
import { ContactDto } from '../contacts/dto/contact.dto';
import { UserInvolvementsRepository } from '../involvements/db/user-involvements.repository';
import { UserRelations } from '../users/db/user.entity';
import { UsersRepository } from '../users/db/users.repository';
import { SetCurrentUserSettingsDto } from './dto/set-current-user-settings.dto';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectRepository(UserInvolvementsRepository)
    private userInvolvementsRepository: UserInvolvementsRepository,
    @InjectRepository(ContactsRepository)
    private contactsRepository: ContactsRepository,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async setCurrentUserSettings(dto: SetCurrentUserSettingsDto, userId: string) {
    await this.updateInvolvements(userId, dto.involvements);
    await this.updateContacts(userId, dto.contacts);
    await this.usersRepository.update(
      { id: userId },
      { nickname: dto.nickname },
    );

    return this.usersRepository.findOne(userId, {
      relations: [UserRelations.CONTACTS, UserRelations.INVOLVEMENTS],
    });
  }

  private async updateInvolvements(
    userId: string,
    involvementStrings: string[],
  ) {
    const involvements = await this.userInvolvementsRepository.find({ userId });
    const idsToRemove = involvements
      .filter((oldInv) => !involvementStrings.includes(oldInv.type))
      .map((inv) => inv.id);
    const typesToAdd = involvementStrings.filter(
      (newInv) => !involvements.find((oldInv) => oldInv.type === newInv),
    );

    if (typesToAdd.length) {
      await this.userInvolvementsRepository.addInvolvements(userId, typesToAdd);
    }
    await this.userInvolvementsRepository.removeInvolvements(idsToRemove);
  }

  private async updateContacts(userId: string, contacts: ContactDto[]) {
    const oldContactIds = contacts.reduce((cIds, contact) => {
      return contact.id ? cIds.concat(contact.id) : cIds;
    }, [] as string[]);

    await this.contactsRepository.removeMissingContactsByIds(
      userId,
      'userId',
      oldContactIds,
    );

    await this.contactsRepository.save(contacts.map((c) => ({ ...c, userId })));
  }
}
