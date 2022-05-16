import { Column, Entity } from 'typeorm';

@Entity('settlement_types')
export class SettlementTypeEntity {
  @Column({ primary: true })
  type: string;
}
