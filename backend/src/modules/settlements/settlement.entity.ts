import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SettlementTypeEntity } from './settlement-type.entity';
import { Point } from 'geojson';
import { UserEntity } from '../users/user.entity';
import { CountryEntity } from '../countries/country.entity';

@Entity('settlements')
export class SettlementEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: '' })
  district: string;

  @Column({ default: '' })
  region: string;

  @Column({ default: '' })
  nameEng: string;

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

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'createdBy', referencedColumnName: 'id' })
  creator?: UserEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
