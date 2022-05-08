import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SettlementEntity } from '../settlements/settlement.entity';
import { VolunteerRequestEntity } from './volunteer-request.entity';

@Entity('volunteer_request_items')
export class VolunteerRequestItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  requestId: string;

  @Column()
  name: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column()
  quantityUnits: string;

  @Column()
  imagePath: string;

  @ManyToOne(() => SettlementEntity)
  @JoinColumn({ name: 'requestId', referencedColumnName: 'id' })
  request: VolunteerRequestEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
