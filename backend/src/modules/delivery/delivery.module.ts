import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryTypesRepository } from './db/delivery-types.repository';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryTypesRepository])],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
