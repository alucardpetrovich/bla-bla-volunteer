import { DictionaryPhraseEntity } from 'src/modules/dictionary/db/dictionary-phrase.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('regions')
export class RegionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  nameId: string;

  @OneToOne(() => DictionaryPhraseEntity)
  @JoinColumn({ name: 'nameId', referencedColumnName: 'id' })
  name: DictionaryPhraseEntity;
}
