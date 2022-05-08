import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { UserInvolvementEntity } from '../involvements/user-involvement.entity';
import { UserStatuses } from './types/user-statuses.enum';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column()
  status: UserStatuses;

  @Column({ default: '' })
  verificationToken: string;

  @OneToMany(() => UserInvolvementEntity, (involvement) => involvement.userId)
  involvements: UserInvolvementEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export enum UserRelations {
  INVOLVEMENTS = 'involvements',
}
