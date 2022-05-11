import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RidesController } from './rides.controller';
import { RidesRepository } from './rides.repository';
import { RidesService } from './rides.service';

@Module({
  imports: [TypeOrmModule.forFeature([RidesRepository])],
  controllers: [RidesController],
  providers: [RidesService],
})
export class RidesModule {}
