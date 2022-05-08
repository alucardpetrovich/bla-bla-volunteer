import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { OrganizationTypeEntity } from './organization-type.entity';

@Entity('organizations')
export class OrganizationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  createdBy: string;

  @ManyToOne(() => OrganizationTypeEntity)
  @JoinColumn({ name: 'type', referencedColumnName: 'type' })
  typeRef: OrganizationTypeEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'createdBy', referencedColumnName: 'id' })
  creator: UserEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
