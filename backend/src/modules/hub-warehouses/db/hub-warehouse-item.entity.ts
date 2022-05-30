import { OrganizationEntity } from 'src/modules/organizations/db/organization.entity';
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

@Entity('hub_warehouse_items')
export class HubWarehouseItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  hubId: string;

  @Column('uuid')
  productId: string;

  @Column('float')
  quantity: number;

  @Column()
  desiredQuantity: number;

  @Column()
  units: string;

  @Column({ default: '' })
  description: string;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: ProductEntity;

  @ManyToOne(() => OrganizationEntity, { cascade: true })
  @JoinColumn({ name: 'hubId', referencedColumnName: 'id' })
  hub: OrganizationEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
