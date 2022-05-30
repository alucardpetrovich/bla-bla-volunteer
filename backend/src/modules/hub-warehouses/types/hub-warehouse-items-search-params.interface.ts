import { HubWarehouseItemRelations } from './hub-warehouse-item-relations.enum';

export interface HubWarehouseItemsSearchParams {
  offset: number;
  limit: number;
  relations: HubWarehouseItemRelations[];
  language: string;
}
