import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { DictionaryPhraseEntity } from '../../dictionary/db/dictionary-phrase.entity';
import { ProductCategoryEntity } from './product-category.entity';
import { ProductStatuses } from '../types/product-statuses.enum';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  nameId: string;

  @Column('uuid')
  categoryId: string;

  @Column({ default: '' })
  imagePath: string;

  @Column()
  status: ProductStatuses;

  @Column({ nullable: true })
  createdBy: string | null;

  @OneToOne(() => DictionaryPhraseEntity)
  @JoinColumn({ name: 'nameId', referencedColumnName: 'id' })
  name: DictionaryPhraseEntity;

  @ManyToOne(() => ProductCategoryEntity)
  @JoinColumn({ name: 'categoryId', referencedColumnName: 'id' })
  category: ProductCategoryEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
