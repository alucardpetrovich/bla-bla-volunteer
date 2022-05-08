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
import { UserEntity } from '../users/user.entity';

@Entity('rides')
export class RideEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  driverId: string;

  @Column()
  departureSettlementId: string;

  @Column()
  arrivalSettlementId: string;

  @Column()
  status: string;

  @Column({ type: 'timestamptz' })
  estDepartureTime: Date;

  @Column({ type: 'timestamptz' })
  estArrivalTime: Date;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'driverId', referencedColumnName: 'id' })
  driver: UserEntity;

  @ManyToOne(() => SettlementEntity)
  @JoinColumn({ name: 'departureSettlementId', referencedColumnName: 'id' })
  departureSettlement: SettlementEntity;

  @ManyToOne(() => SettlementEntity)
  @JoinColumn({ name: 'arrivalSettlementId', referencedColumnName: 'id' })
  arrivalSettlement: SettlementEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
