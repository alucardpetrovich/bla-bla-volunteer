import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ContactTypeEntity } from './contact-type.entity';
import { OrganizationEntity } from './organization.entity';

@Entity('organization_contacts')
export class OrganizationContactEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  organizationId: string;

  @Column()
  type: string;

  @Column()
  value: string;

  @Column()
  verified: boolean;

  @ManyToOne(() => OrganizationEntity)
  @JoinColumn({ name: 'organizationId', referencedColumnName: 'id' })
  organization: OrganizationEntity;

  @ManyToOne(() => ContactTypeEntity)
  @JoinColumn({ name: 'type', referencedColumnName: 'type' })
  typeRef: ContactTypeEntity;
}
