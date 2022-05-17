import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { UserEntity } from '../../users/user.entity';
import { InvolvementTypeEntity } from './involvement-type.entity';

@Entity('user_involvements')
@Unique(['userId', 'type'])
export class UserInvolvementEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  type: string;

  @Column()
  verified: boolean;

  @ManyToOne(() => InvolvementTypeEntity)
  @JoinColumn({ name: 'type', referencedColumnName: 'type' })
  typeRef: InvolvementTypeEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: UserEntity;
}
