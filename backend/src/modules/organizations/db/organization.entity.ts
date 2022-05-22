import { ContactEntity } from 'src/modules/contacts/db/contact.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { SettlementEntity } from '../../settlements/db/settlement.entity';
import { UserEntity } from '../../users/user.entity';
import { OrganizationTypeEntity } from './organization-type.entity';

// TODO: add organization statuses

@Entity('organizations')
export class OrganizationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  status: string;

  @Column({ default: '' })
  address: string;

  @Column()
  settlementId: string;

  @Column()
  createdBy: string;

  @OneToMany(() => ContactEntity, (c) => c.organization, {
    cascade: true,
  })
  contacts: ContactEntity[];

  @ManyToOne(() => OrganizationTypeEntity)
  @JoinColumn({ name: 'type', referencedColumnName: 'type' })
  typeRef: OrganizationTypeEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'createdBy', referencedColumnName: 'id' })
  creator: UserEntity;

  @ManyToOne(() => SettlementEntity)
  @JoinColumn({ name: 'settlementId', referencedColumnName: 'id' })
  settlement: SettlementEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
