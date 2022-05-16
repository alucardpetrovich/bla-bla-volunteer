import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoriesRepository } from './db/product-categories.repository';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './db/products.repository';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductCategoriesRepository, ProductsRepository]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
