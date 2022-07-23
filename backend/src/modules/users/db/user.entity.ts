import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ContactEntity } from '../../contacts/db/contact.entity';
import { UserInvolvementEntity } from '../../involvements/db/user-involvement.entity';
import { UserStatuses } from '../types/user-statuses.enum';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: '' })
  nickname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column()
  status: UserStatuses;

  @Column({ default: '' })
  verificationToken: string;

  @OneToMany(() => UserInvolvementEntity, (involvement) => involvement.user)
  involvements: UserInvolvementEntity[];

  @OneToMany(() => ContactEntity, (c) => c.user)
  contacts: ContactEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export enum UserRelations {
  INVOLVEMENTS = 'involvements',
  CONTACTS = 'contacts',
}
