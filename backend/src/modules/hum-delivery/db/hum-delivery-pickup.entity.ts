import { OrganizationEntity } from 'src/modules/organizations/db/organization.entity';
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
import { DeliveryPickupStatuses } from '../types/delivery-pickup-statuses.enum';
import { HumDeliveryPickupItemEntity } from './hum-delivery-pickup-item.entity';
import { HumDeliveryEntity } from './hum-delivery.entity';

@Entity('hum_delivery_pickups')
export class HumDeliveryPickupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  deliveryId: string;

  @Column('uuid')
  hubId: string;

  @Column()
  status: DeliveryPickupStatuses;

  @Column({ nullable: true })
  estPickupTime: Date | null;

  @Column({ nullable: true })
  actualPickupTime: Date | null;

  @Column({ default: '' })
  hubComment: string;

  @ManyToOne(() => HumDeliveryEntity, { cascade: true })
  @JoinColumn({ name: 'deliveryId', referencedColumnName: 'id' })
  delivery: HumDeliveryEntity;

  @ManyToOne(() => OrganizationEntity)
  @JoinColumn({ name: 'hubId', referencedColumnName: 'id' })
  hub: OrganizationEntity;

  @OneToMany(() => HumDeliveryPickupItemEntity, (hdpi) => hdpi.pickup)
  items: HumDeliveryPickupItemEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
