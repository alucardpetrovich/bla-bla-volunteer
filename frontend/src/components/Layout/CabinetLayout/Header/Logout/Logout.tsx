import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { FC, useCallback } from 'react';
import { useIntl } from 'react-intl';

// import { PATHS } from '../../../../common/constants/PATH';
import { PATHS } from '../../../../common/constants/PATH';
import { StorageKeys } from '../../../../common/constants/storageKeys';
import { useNavigation } from '../../../../common/hooks/useNavigation';
import { getCurrentUserInfo } from '../../../../common/services/api/auth';
import axios from '../../../../common/utils/axios';
import { getFromStorage, removeFromStorage } from '../../../../common/utils/storage';
import { Button } from './Logout.styles';

const signOut = async (refreshToken: string) => {
  await axios.delete('/v1/auth/sign-out', {
    data: {
      refreshToken,
    },
  });
};

interface Token {
  token: string;
  expiresAt: number;
}

export const Logout: FC = () => {
  const queryClient = useQueryClient();
  const { formatMessage } = useIntl();

  const toHome = useNavigation(PATHS.HOME);

  const { mutate, isLoading } = useMutation(signOut, {
    onSuccess: () => {
      removeFromStorage(StorageKeys.refreshToken);
      removeFromStorage(StorageKeys.authToken);
      queryClient.setQueryData([getCurrentUserInfo.name], null);
      toHome();
    },
  });

  const handleLogout = useCallback(() => {
    const refreshToken = getFromStorage<Token>(StorageKeys.refreshToken);
    mutate(refreshToken?.token ?? '');
  }, [mutate]);

  return (
    <Button disabled={isLoading} onClick={handleLogout}>
      {formatMessage({
        defaultMessage: 'вихід',
        description: 'Header logout button text',
      })}
    </Button>
  );
};
