import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { emailSchema, FormatMessage, passwordSchema } from '@ui-kit';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useIntl } from 'react-intl';
import { InferType, object } from 'yup';

import { PATHS } from '../../../common/constants/PATH';
import { StorageKeys } from '../../../common/constants/storageKeys';
import { useNavigation } from '../../../common/hooks/useNavigation';
import { useRecaptcha } from '../../../common/hooks/useRecaptcha';
import { CurrentUserInfo, getCurrentUserInfo } from '../../../common/services/api/auth';
import axios from '../../../common/utils/axios';
import { setToStorage } from '../../../common/utils/storage';

interface Token {
  token: string;
  expiresAt: number;
}

interface Tokens {
  access: Token;
  refresh: Token;
}

interface SignInResponse {
  tokens: Tokens;
  user?: CurrentUserInfo;
}

interface SignInData {
  email: string;
  password: string;
  recaptchaResponse?: string;
}

export const signIn = async (payload: SignInData): Promise<SignInResponse> => {
  const response = await axios.post('/v1/auth/sign-in', payload);
  return response.data;
};

const schema = (t: FormatMessage) =>
  object({
    email: emailSchema(t),
    password: passwordSchema(t, 6),
  });

export const useLogin = () => {
  const { formatMessage } = useIntl();
  const queryClient = useQueryClient();
  const toProfile = useNavigation(PATHS.PROFILE);
  const { getCaptchaToken } = useRecaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InferType<ReturnType<typeof schema>>>({
    reValidateMode: 'onChange',
    shouldUnregister: true,
    resolver: yupResolver(schema(formatMessage)),
  });

  const { mutate, isLoading } = useMutation(signIn, {
    onSuccess(response) {
      setToStorage(StorageKeys.authToken, JSON.stringify(response.tokens.access));
      setToStorage(StorageKeys.refreshToken, JSON.stringify(response.tokens.refresh));
      queryClient
        .invalidateQueries([getCurrentUserInfo.name])
        .catch(err => toast.error(err))
        .finally(() => {
          toProfile();
        });
    },
  });

  const handleSignIn = useCallback(
    async (data: SignInData) => {
      const token = await getCaptchaToken();

      mutate({ ...data, recaptchaResponse: token });
    },
    [getCaptchaToken, mutate],
  );

  return { register, handleSubmit, errors, isLoading, handleSignIn };
};
