import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '../users/users.repository';
import { InvolvementTypesRepository } from './db/involvement-types.repository';
import { InvolvementsController } from './involvements.controller';
import { InvolvementsService } from './involvements.service';
import { UserInvolvementsRepository } from './db/user-involvements.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersRepository,
      UserInvolvementsRepository,
      InvolvementTypesRepository,
    ]),
  ],
  controllers: [InvolvementsController],
  providers: [InvolvementsService],
})
export class InvolvementsModule {}
