import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvolvementTypesRepository } from './db/involvement-types.repository';
import { InvolvementsController } from './involvements.controller';
import { InvolvementsService } from './involvements.service';

@Module({
  imports: [TypeOrmModule.forFeature([InvolvementTypesRepository])],
  controllers: [InvolvementsController],
  providers: [InvolvementsService],
})
export class InvolvementsModule {}
