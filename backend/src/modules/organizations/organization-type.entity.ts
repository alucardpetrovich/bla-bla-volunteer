import { Column, Entity } from 'typeorm';

@Entity('organization_types')
export class OrganizationTypeEntity {
  @Column({ primary: true })
  type: string;
}
