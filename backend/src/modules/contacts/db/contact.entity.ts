import { OrganizationEntity } from 'src/modules/organizations/db/organization.entity';
import { UserEntity } from 'src/modules/users/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ContactTypeEntity } from './contact-type.entity';

// TODO: add access_modes enum
// TODO: add contact_types migration

@Entity('contacts')
export class ContactEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { nullable: true })
  organizationId: string | null;

  @Column('uuid', { nullable: true })
  userId: string | null;

  @Column()
  accessMode: string;

  @Column()
  type: string;

  @Column()
  value: string;

  @Column()
  verified: boolean;

  @ManyToOne(() => OrganizationEntity)
  @JoinColumn({ name: 'organizationId', referencedColumnName: 'id' })
  organization: OrganizationEntity | null;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: UserEntity | null;

  @ManyToOne(() => ContactTypeEntity)
  @JoinColumn({ name: 'type', referencedColumnName: 'type' })
  typeRef: ContactTypeEntity;
}
