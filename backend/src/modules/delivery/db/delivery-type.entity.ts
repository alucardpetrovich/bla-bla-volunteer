import { DictionaryPhraseEntity } from 'src/modules/dictionary/db/dictionary-phrase.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('delivery_types')
export class DeliveryTypeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  nameId: string;

  @Column('jsonb')
  requiredDeliveryInfo: string[];

  @OneToOne(() => DictionaryPhraseEntity)
  @JoinColumn({ name: 'nameId', referencedColumnName: 'id' })
  name: DictionaryPhraseEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
