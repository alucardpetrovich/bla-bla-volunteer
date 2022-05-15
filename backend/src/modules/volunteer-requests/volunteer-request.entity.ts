import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { OrganizationEntity } from '../organizations/enitities/organization.entity';
import { SettlementEntity } from '../settlements/settlement.entity';

@Entity('volunteer_requests')
export class VolunteerRequestEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column()
  settlementId: string;

  @Column()
  organizationId: string;

  @Column({ default: '' })
  comment: string;

  @ManyToOne(() => OrganizationEntity)
  @JoinColumn({ name: 'organizationId', referencedColumnName: 'id' })
  organization: OrganizationEntity;

  @ManyToOne(() => SettlementEntity)
  @JoinColumn({ name: 'settlementId', referencedColumnName: 'id' })
  settlement: SettlementEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
