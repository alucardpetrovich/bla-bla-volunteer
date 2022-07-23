import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { SettlementTypeEntity } from './settlement-type.entity';
import { Point } from 'geojson';
import { UserEntity } from '../../users/db/user.entity';
import { CountryEntity } from '../../countries/db/country.entity';
import { DictionaryPhraseEntity } from 'src/modules/dictionary/db/dictionary-phrase.entity';
import { DistrictEntity } from './district.entity';
import { RegionEntity } from './region.entity';

@Entity('settlements')
export class SettlementEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  nameId: string;

  @Column('uuid', { nullable: true })
  districtId: string | null;

  @Column('uuid', { nullable: true })
  regionId: string | null;

  @Column()
  type: string;

  @Column({
    type: 'geography',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  centerLocation: Point;

  @Column()
  countryCode: string;

  @Column({ default: '' })
  postalCode: string;

  @Column({ nullable: true })
  createdBy?: string;

  @ManyToOne(() => SettlementTypeEntity)
  @JoinColumn({ name: 'type', referencedColumnName: 'type' })
  typeRef: SettlementTypeEntity;

  @ManyToOne(() => CountryEntity)
  @JoinColumn({ name: 'countryCode', referencedColumnName: 'code' })
  country: CountryEntity;

  @ManyToOne(() => RegionEntity)
  @JoinColumn({ name: 'regionId', referencedColumnName: 'id' })
  region: RegionEntity | null;

  @ManyToOne(() => DistrictEntity)
  @JoinColumn({ name: 'districtId', referencedColumnName: 'id' })
  district: DistrictEntity | null;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'createdBy', referencedColumnName: 'id' })
  creator?: UserEntity;

  @OneToOne(() => DictionaryPhraseEntity)
  @JoinColumn({ name: 'nameId', referencedColumnName: 'id' })
  name: DictionaryPhraseEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
