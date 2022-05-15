import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('countries')
export class CountryEntity {
  @PrimaryColumn()
  code: string;

  @Column()
  name: string;

  @Column()
  nameEng: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
