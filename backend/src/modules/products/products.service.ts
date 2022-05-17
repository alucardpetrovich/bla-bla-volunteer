import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategoriesRepository } from './db/product-categories.repository';
import { ProductsRepository } from './db/products.repository';
import { SearchProductsDto } from './dto/search-products.dto';

@Injectable()
export class ProductsService {
  private PAGE_SIZE = 50;

  constructor(
    @InjectRepository(ProductCategoriesRepository)
    private productCategoriesRepository: ProductCategoriesRepository,
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
  ) {}

  async getProductCategories(language: string) {
    return this.productCategoriesRepository.findProductCategories(language);
  }

  async searchProducts(dto: SearchProductsDto, language: string) {
    return this.productsRepository.searchProducts({
      query: dto.query,
      categoryId: dto.categoryId,
      limit: this.PAGE_SIZE,
      offset: (dto.page - 1) * this.PAGE_SIZE,
      language,
    });
  }
}
