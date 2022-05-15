import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '../users/users.repository';
import { InvolvementTypesRepository } from './involvement-types.repository';
import { InvolvementsController } from './involvements.controller';
import { InvolvementsService } from './involvements.service';
import { UserInvolvementsRepository } from './user-involvements.repository';

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
