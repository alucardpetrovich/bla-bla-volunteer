import { PointDto } from 'src/shared/dto/point.dto';

export interface HubsSearchParams {
  search?: string;
  point?: PointDto;
  language: string;
  offset: number;
  limit: number;
  maxDistance: number;
}
