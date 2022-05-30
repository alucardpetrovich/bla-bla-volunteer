import { PointDto } from 'src/shared/dto/point.dto';
import { OrganizationRelations } from './organization-relations.enum';

export interface HubsSearchParams {
  search?: string;
  point?: PointDto;
  language: string;
  offset: number;
  limit: number;
  maxDistance: number;
  relations: OrganizationRelations[];
  userId: string;
}
