import { Column, Entity } from 'typeorm';

@Entity('contact_types')
export class ContactTypeEntity {
  @Column({ primary: true })
  type: string;
}
