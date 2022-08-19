import axios, { withLanguageHeaders } from '../../../../common/utils/axios';

interface SettlementsSearchProps {
  search: string;
}

export interface Settlement {
  centerLocation: {
    lon: number;
    lat: number;
  };
  lon?: number;
  lat?: number;
  countryCode: string;
  district: string;
  id: string;
  name: string;
  region: string;
  type: string;
}

interface SettlementsSearchResponse {
  settlements: Settlement[];
}

export const settlementsSearch = async ({ search }: SettlementsSearchProps): Promise<SettlementsSearchResponse> => {
  const headers = withLanguageHeaders();

  const response = await axios.get(`/v1/settlements?search=${search}&page=1`, {
    headers: {
      ...headers,
    },
  });

  return response.data;
};
