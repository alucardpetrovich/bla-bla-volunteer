import { Involvement } from '../../../../common/services/api/auth';
import axios, { withLanguageHeaders } from '../../../../common/utils/axios';
import { Contact } from './contacts';
import { Settlement } from './settlements';

export interface MyOrganizationsResponse {
  organizations: [
    {
      id: string;
      name: string;
      type: string;
      address: string;
      settlementId: string;
      settlement: Settlement;
      contacts: Contact[];
    },
  ];
  settlementsWithHubsCount: (Settlement & { hubsCount: number })[];
}

export const getMyOrganizations = async (): Promise<MyOrganizationsResponse> => {
  const headers = withLanguageHeaders();

  const response = await axios.get('/v1/organizations/my', {
    headers: {
      ...headers,
    },
  });

  return response.data;
};

export interface OrganizationData {
  id?: string;
  name: string;
  type: Involvement;
  address: string;
  settlementId: string;
  contacts: Contact[];
}

export const createOrganization = async (payload: OrganizationData) => {
  const headers = withLanguageHeaders();

  const response = await axios.post('/v1/organizations', payload, {
    headers: {
      ...headers,
    },
  });

  return response.data;
};

export const updateOrganization = async (payload: OrganizationData) => {
  const headers = withLanguageHeaders();
  const { id, ...rest } = payload;

  const response = await axios.put(`/v1/organizations/${id}`, rest, {
    headers: {
      ...headers,
    },
  });

  return response.data;
};
