import { PointDto } from 'src/shared/dto/point.dto';
import { OrganizationRelations } from './organization-relations.enum';
import { OrganizationTypes } from './organization-types.enum';

export interface OrganizationsSearchParams {
  search?: string;
  point?: PointDto;
  language: string;
  radius?: number;
  relations: OrganizationRelations[];
  userId: string;
  types?: OrganizationTypes[];
  isUserOwner?: boolean;
}
