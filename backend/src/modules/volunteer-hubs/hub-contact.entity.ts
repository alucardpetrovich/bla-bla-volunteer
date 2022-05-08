import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { OrganizationEntity } from '../organizations/organization.entity';
import { VolunteerHubEntity } from './volunteer-hub.entity';

@Entity('hub_contacts')
export class HubContactEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  organizationId: string;

  @Column()
  hubId: string;

  @Column()
  type: string;

  @Column()
  value: string;

  @ManyToOne(() => OrganizationEntity)
  @JoinColumn({ name: 'organizationId', referencedColumnName: 'id' })
  organization: OrganizationEntity;

  @ManyToOne(() => VolunteerHubEntity)
  @JoinColumn({ name: 'hubId', referencedColumnName: 'id' })
  hub: VolunteerHubEntity;
}
