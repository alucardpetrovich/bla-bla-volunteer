import { EntityRepository, Repository } from 'typeorm';
import { ProductCategoryEntity } from './product-category.entity';

@EntityRepository(ProductCategoryEntity)
export class ProductCategoriesRepository extends Repository<ProductCategoryEntity> {
  async findProductCategories(language: string) {
    return this.createQueryBuilder('pc')
      .innerJoinAndSelect('pc.name', 'pcn')
      .innerJoinAndSelect('pcn.localizations', 'pcnl')

      .where('pcnl.language = :language', { language })

      .getMany();
  }
}
