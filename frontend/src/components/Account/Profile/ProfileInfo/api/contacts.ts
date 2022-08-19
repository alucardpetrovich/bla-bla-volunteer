import axios, { withLanguageHeaders } from '../../../../common/utils/axios';

export enum AccessModes {
  PUBLIC = 'public',
  READ_BY_REQUEST = 'read_by_request',
  READ_ONLY_ME = 'read_only_me',
}

export interface Contact {
  id?: string;
  type: string;
  value: string;
  verified?: boolean;
  accessMode: AccessModes;
}

export interface ContactType {
  type: string;
  name: string;
}

interface ContactsTypesResponse {
  types: ContactType[];
}

export const getContactsTypes = async (): Promise<ContactsTypesResponse> => {
  const headers = withLanguageHeaders();

  const response = await axios.get('/v1/contacts/types', {
    headers: {
      ...headers,
    },
  });

  return response.data;
};
