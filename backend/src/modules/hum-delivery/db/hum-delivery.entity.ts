import { OrganizationEntity } from 'src/modules/organizations/db/organization.entity';
import { UserEntity } from 'src/modules/users/db/user.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { DeliveryStatuses } from '../types/delivery-statuses.enum';
import { LineString } from 'geojson';
import { HumDeliveryPickupEntity } from './hum-delivery-pickup.entity';
import { HumDeliveryItemReceivedEntity } from './hum-delivery-item-received.entity';

@Entity('hum_deliveries')
export class HumDeliveryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  driverId: string;

  @Column('uuid')
  recipientId: string;

  @Column()
  status: DeliveryStatuses;

  @Column({ nullable: true })
  estArrivalTime: Date | null;

  @Column({ nullable: true })
  actualArrivalTime: Date | null;

  @Column('geography', { spatialFeatureType: 'LineString' })
  routeCurve: LineString;

  @Column({ default: '' })
  description: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'driverId', referencedColumnName: 'id' })
  driver: UserEntity;

  @ManyToOne(() => OrganizationEntity)
  @JoinColumn({ name: 'receiverId', referencedColumnName: 'id' })
  recipient: OrganizationEntity;

  @OneToMany(() => HumDeliveryPickupEntity, (hdp) => hdp.delivery)
  pickups: HumDeliveryPickupEntity[];

  @OneToMany(() => HumDeliveryItemReceivedEntity, (hdir) => hdir.delivery)
  itemsReceived: HumDeliveryItemReceivedEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
