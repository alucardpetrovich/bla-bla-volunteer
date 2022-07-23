import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsRepository } from '../contacts/db/contacts.repository';
import { UserInvolvementsRepository } from '../involvements/db/user-involvements.repository';
import { UsersRepository } from '../users/db/users.repository';
import { UserSettingsController } from './user-settings.controller';
import { UserSettingsService } from './user-settings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserInvolvementsRepository,
      ContactsRepository,
      UsersRepository,
    ]),
  ],
  controllers: [UserSettingsController],
  providers: [UserSettingsService],
})
export class UserSettingsModule {}
