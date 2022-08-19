import { useMutation, useQueryClient } from '@tanstack/react-query';
import { omit } from 'lodash';
import { useCallback } from 'react';
import toast from 'react-hot-toast';

import { CurrentUserInfo, getCurrentUserInfo, Involvement } from '../services/api/auth';
import axios from '../utils/axios';
import { useCurrentUser } from './useCurrentUser';

export interface UserSettingsData extends Partial<Omit<CurrentUserInfo, 'id' | 'status' | 'involvements'>> {
  involvements?: Involvement[];
}

export const userSettings = async (payload: UserSettingsData): Promise<{ user: CurrentUserInfo }> => {
  const response = await axios.put('/v1/users/settings', payload);
  return response.data;
};

export const useUserSettings = () => {
  const user = useCurrentUser();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(userSettings, {
    onSuccess: () => {
      queryClient.invalidateQueries([getCurrentUserInfo.name]).catch(err => toast.error(err));
    },
  });

  const updateUserSettings = useCallback(
    (payload: UserSettingsData) => {
      if (!user) {
        throw new Error('Error updating user');
      }

      const u =
        'involvements' in payload
          ? omit(user, ['involvements'])
          : { ...user, involvements: user.involvements.map(item => item.type) };

      const p: UserSettingsData = { ...u, ...payload };
      return mutateAsync(p);
    },
    [mutateAsync, user],
  );

  return { isLoading, updateUserSettings };
};
