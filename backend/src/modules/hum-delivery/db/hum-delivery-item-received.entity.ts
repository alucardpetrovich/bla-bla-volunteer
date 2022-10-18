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
import { HumDeliveryEntity } from './hum-delivery.entity';

@Entity('hum_delivery_items_received')
export class HumDeliveryItemReceivedEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  deliveryId: string;

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
  recipientComment: string;

  @ManyToOne(() => HumDeliveryEntity, { cascade: true })
  @JoinColumn({ name: 'deliveryId', referencedColumnName: 'id' })
  delivery: HumDeliveryEntity;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: ProductEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
