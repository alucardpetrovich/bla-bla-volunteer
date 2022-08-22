import { useQueryClient } from '@tanstack/react-query';

import { getCurrentUserInfo } from '../services/api/auth';
import { CurrentUserInfo } from '../services/api/auth';
import { ParsedCurrentUserInfo } from './useCurrentUserInfoQuery';

export const useCurrentUser = (): ParsedCurrentUserInfo | null => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<CurrentUserInfo>([getCurrentUserInfo.name]);

  if (!user) {
    return null;
  }

  return { ...user, hasUserRole: Boolean(user?.involvements?.length) };
};
