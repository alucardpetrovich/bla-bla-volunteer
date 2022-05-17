import { EntityRepository, Repository } from 'typeorm';
import { ProductsSearchParams } from '../types/products-search-params.interface';
import { ProductEntity } from './product.entity';

@EntityRepository(ProductEntity)
export class ProductsRepository extends Repository<ProductEntity> {
  async searchProducts(params: ProductsSearchParams) {
    return this.createQueryBuilder('p')
      .innerJoinAndSelect('p.name', 'pn')
      .innerJoinAndSelect('pn.localizations', 'pnl')
      .innerJoinAndSelect('p.category', 'pc')
      .innerJoinAndSelect('pc.name', 'pcn')
      .innerJoinAndSelect('pcn.localizations', 'pcnl')

      .where('pnl.text ILIKE :query')
      .andWhere('p.categoryId = :categoryId')
      .andWhere('pnl.language = :language')
      .andWhere('pcnl.language = :language')

      .orderBy('pnl.text ILIKE :startsWith', 'DESC')
      .offset(params.offset)
      .limit(params.limit)

      .setParameters({
        query: `%${params.query}%`,
        startsWith: `${params.query}%`,
        categoryId: params.categoryId,
        language: params.language,
      })

      .getMany();
  }
}
