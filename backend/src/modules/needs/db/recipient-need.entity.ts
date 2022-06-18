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

@Entity('recipient_needs')
export class RecipientNeedEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  recipientId: string;

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
  @JoinColumn({ name: 'recipientId', referencedColumnName: 'id' })
  recipient: OrganizationEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
