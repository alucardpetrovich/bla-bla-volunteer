import { useQuery } from '@tanstack/react-query';

import { getContactsTypes } from './api/contacts';

export const useGetContactsTypesQuery = () => {
  return useQuery([getContactsTypes.name], getContactsTypes, { staleTime: Infinity });
};
