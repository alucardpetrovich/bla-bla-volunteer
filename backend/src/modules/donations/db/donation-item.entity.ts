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
import { DonationRequestEntity } from './donation-request.entity';

@Entity('donation_items')
export class DonationItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  requestId: string;

  @Column('uuid')
  productId: string;

  @Column('float')
  quantity: number;

  @Column()
  units: string;

  @Column({ default: '' })
  description: string;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: ProductEntity;

  @ManyToOne(() => DonationRequestEntity, { cascade: true })
  @JoinColumn({ name: 'requestId', referencedColumnName: 'id' })
  request: DonationRequestEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
