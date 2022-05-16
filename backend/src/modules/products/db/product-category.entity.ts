import { DictionaryPhraseEntity } from 'src/modules/dictionary/db/dictionary-phrase.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product_categories')
export class ProductCategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  category: string;

  @Column('uuid')
  nameId: string;

  @OneToOne(() => DictionaryPhraseEntity)
  @JoinColumn({ name: 'nameId', referencedColumnName: 'id' })
  name: DictionaryPhraseEntity;
}
