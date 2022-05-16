import { Column, Entity } from 'typeorm';

@Entity('involvement_types')
export class InvolvementTypeEntity {
  @Column({ primary: true })
  type: string;
}
