import { useQuery } from '@tanstack/react-query';
import { keyBy } from 'lodash';

import { AccessModes, Contact, ContactType } from './api/contacts';
import { getMyOrganizations, MyOrganizationsResponse } from './api/organization';
import { Settlement } from './api/settlements';
import { useGetContactsTypesQuery } from './useGetContactsTypesQuery';

interface RoleInfo {
  id?: string;
  name: string;
  settlement: Settlement | undefined;
  address: string;
  contacts: ContactProps[];
}

export interface ContactProps extends Contact {
  name: string;
}

const parseGetMyOrganizationsQuery = (data: MyOrganizationsResponse | undefined, types: ContactType[] | undefined) => {
  const myOrganization = data?.organizations?.[0];

  const c = myOrganization?.contacts ?? [
    {
      type: 'phone',
      value: '',
      accessMode: AccessModes.READ_ONLY_ME,
    },
  ];

  const parsedTypes = keyBy(types, 'type');

  const contacts = c.reduce<ContactProps[]>((acc, contact) => {
    acc.push({ ...contact, ...(parsedTypes?.[contact.type] ?? {}) });
    return acc;
  }, []);

  const roleInfo: RoleInfo = {
    id: myOrganization?.id,
    name: myOrganization?.name ?? '',
    settlement: myOrganization?.settlement,
    address: myOrganization?.address ?? '',
    contacts: contacts ?? [],
  };

  return { ...data, roleInfo };
};

export const useGetMyOrganizationsQuery = () => {
  const { data: typesData, isLoading } = useGetContactsTypesQuery();

  return useQuery([getMyOrganizations.name], getMyOrganizations, {
    staleTime: Infinity,
    select: data => parseGetMyOrganizationsQuery(data, typesData?.types),
    enabled: !isLoading,
  });
};
