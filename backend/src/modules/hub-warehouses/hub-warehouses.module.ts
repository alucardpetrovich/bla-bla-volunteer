import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsRepository } from '../organizations/db/organizations.repository';
import { HubWarehouseItemsRepository } from './db/hub-warehouse-items.repository';
import { HubWarehousesController } from './hub-warehouses.controller';
import { HubWarehousesService } from './hub-warehouses.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrganizationsRepository,
      HubWarehouseItemsRepository,
    ]),
  ],
  controllers: [HubWarehousesController],
  providers: [HubWarehousesService],
})
export class HubWarehousesModule {}
