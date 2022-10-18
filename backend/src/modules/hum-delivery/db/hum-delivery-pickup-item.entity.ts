import { ProductEntity } from 'src/modules/products/db/product.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { HumDeliveryPickupEntity } from './hum-delivery-pickup.entity';

@Entity('hum_delivery_pickup_items')
export class HumDeliveryPickupItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  pickupId: string;

  @Column('uuid')
  productId: string;

  @Column()
  received: boolean;

  @Column()
  estQuantity: number;

  @Column({ nullable: true })
  actualQuantity: number | null;

  @Column()
  units: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  driverComment: string;

  @Column({ default: '' })
  hubComment: string;

  @ManyToOne(() => HumDeliveryPickupEntity, { cascade: true })
  @JoinColumn({ name: 'pickupId', referencedColumnName: 'id' })
  pickup: HumDeliveryPickupEntity;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: ProductEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
