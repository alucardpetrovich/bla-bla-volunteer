import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettlementsController } from './settlements.controller';
import { SettlementsRepository } from './db/settlements.repository';
import { SettlementsService } from './settlements.service';

@Module({
  imports: [TypeOrmModule.forFeature([SettlementsRepository])],
  controllers: [SettlementsController],
  providers: [SettlementsService],
})
export class SettlementsModule {}
