import { DictionaryPhraseEntity } from 'src/modules/dictionary/db/dictionary-phrase.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity('settlement_types')
export class SettlementTypeEntity {
  @Column({ primary: true })
  type: string;

  @Column('uuid')
  nameId: string;

  @OneToOne(() => DictionaryPhraseEntity)
  name: DictionaryPhraseEntity;
}
