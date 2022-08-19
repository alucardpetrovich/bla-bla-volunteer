import { useQuery } from '@tanstack/react-query';

import { CurrentUserInfo, getCurrentUserInfo } from '../services/api/auth';

export interface ParsedCurrentUserInfo extends CurrentUserInfo {
  hasUserRole: boolean;
}

const parseCurrentUserInfo = (data: CurrentUserInfo): ParsedCurrentUserInfo | undefined => {
  const hasUserRole = Boolean(data?.involvements.length);

  if (!data) return;

  return { ...data, hasUserRole };
};

export const useCurrentUserInfoQuery = () => {
  return useQuery([getCurrentUserInfo.name], ({ signal }) => getCurrentUserInfo(signal), {
    select: parseCurrentUserInfo,
    staleTime: Infinity,
    retry: 1,
    onError: () => {
      console.error('Error fetching user');
    },
  });
};
