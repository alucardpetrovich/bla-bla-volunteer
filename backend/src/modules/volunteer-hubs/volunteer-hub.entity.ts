import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { OrganizationEntity } from '../organizations/organization.entity';
import { SettlementEntity } from '../settlements/settlement.entity';
import { UserEntity } from '../users/user.entity';

@Entity('volunteer_hubs')
export class VolunteerHubEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  organizationId: string;

  @Column()
  settlementId: string;

  @Column()
  createdBy: string;

  @ManyToOne(() => OrganizationEntity)
  @JoinColumn({ name: 'organizationId', referencedColumnName: 'id' })
  organization: OrganizationEntity;

  @ManyToOne(() => SettlementEntity)
  @JoinColumn({ name: 'settlementId', referencedColumnName: 'id' })
  settlement: SettlementEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'createdBy', referencedColumnName: 'id' })
  creator: UserEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
