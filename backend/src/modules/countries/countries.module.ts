import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesController } from './countries.controller';
import { CountriesRepository } from './countries.repository';
import { CountriesService } from './countries.service';

@Module({
  imports: [TypeOrmModule.forFeature([CountriesRepository])],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
