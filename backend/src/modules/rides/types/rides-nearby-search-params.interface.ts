export interface RidesNearbySearchParams {
  lon: number;
  lat: number;
  searchRadiusInKm: number;
  pagination: {
    offset: number;
    limit: number;
  };
}
