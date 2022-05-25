import { DeliveryTypeEntity } from 'src/modules/delivery/db/delivery-type.entity';
import { OrganizationEntity } from 'src/modules/organizations/db/organization.entity';
import { UserEntity } from 'src/modules/users/user.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { DeliveryInfoBlockSerializer } from '../serializers/delivery-info-block.serializer';
import { DonationRequestStatuses } from '../types/donation-request-statuses.enum';
import { DonationItemEntity } from './donation-item.entity';

@Entity('donation_requests')
export class DonationRequestEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: DonationRequestStatuses;

  @Column('text', { default: '' })
  description: string;

  @Column('uuid')
  donorId: string;

  @Column('uuid')
  deliveryTypeId: string;

  @Column('uuid')
  hubReceiverId: string;

  @Column('jsonb', { default: '[]' })
  receiverDeliveryInfo: DeliveryInfoBlockSerializer[];

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'donorId', referencedColumnName: 'id' })
  donor: UserEntity;

  @ManyToOne(() => DeliveryTypeEntity)
  @JoinColumn({ name: 'deliveryTypeId', referencedColumnName: 'id' })
  deliveryType: DeliveryTypeEntity;

  @ManyToOne(() => OrganizationEntity)
  @JoinColumn({ name: 'hubReceiverId', referencedColumnName: 'id' })
  hubReceiver: OrganizationEntity;

  @OneToMany(() => DonationItemEntity, (di) => di.request)
  items: DonationItemEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
