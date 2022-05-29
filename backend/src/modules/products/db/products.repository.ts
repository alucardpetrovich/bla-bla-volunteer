import { EntityRepository, Repository } from 'typeorm';
import { ProductsSearchParams } from '../types/products-search-params.interface';
import { ProductEntity } from './product.entity';

@EntityRepository(ProductEntity)
export class ProductsRepository extends Repository<ProductEntity> {
  async searchProducts(params: ProductsSearchParams) {
    const query = this.createQueryBuilder('p')
      .innerJoinAndSelect('p.name', 'pn')
      .innerJoinAndSelect('pn.localizations', 'pnl')
      .innerJoinAndSelect('p.category', 'pc')
      .innerJoinAndSelect('pc.name', 'pcn')
      .innerJoinAndSelect('pcn.localizations', 'pcnl');

    if (params.query) {
      query
        .where('pnl.text ILIKE :query')

        .orderBy('pnl.text ILIKE :startsWith', 'DESC');
    } else {
      query.orderBy('pnl.text', 'ASC');
    }

    return query
      .andWhere('p.categoryId = :categoryId')
      .andWhere('pnl.language = :language')
      .andWhere('pcnl.language = :language')

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
