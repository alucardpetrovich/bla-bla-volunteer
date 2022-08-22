import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useMutation } from '@tanstack/react-query';
import { errors, FormatMessage, passwordSchema } from '@ui-kit';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-use';
import { InferType, object, ref, string } from 'yup';

import axios from '../../../common/utils/axios';

interface ResetPasswordData {
  code: string;
  newPassword: string;
}

const resetPassword = (payload: ResetPasswordData): Promise<void> => {
  return axios.patch('/v1/auth/reset-password', payload);
};

const schema = (t: FormatMessage) =>
  object({
    newPassword: passwordSchema(t),
    repeatPassword: string().oneOf([ref('newPassword')], t(errors.password.repeat)),
  });

export const useResetPassword = () => {
  const { formatMessage } = useIntl();
  const { search } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InferType<ReturnType<typeof schema>>>({
    reValidateMode: 'onChange',
    shouldUnregister: true,
    resolver: yupResolver(schema(formatMessage)),
  });

  const { mutate, isLoading, isSuccess } = useMutation(resetPassword, {
    onError: () => {
      toast.error(formatMessage({ defaultMessage: 'Помилка', description: 'Reset Password: error msg' }));
    },
  });

  const handleResetPassword = useCallback(
    (data: InferType<ReturnType<typeof schema>>) => {
      const code = new URLSearchParams(search).get('code') ?? '';
      mutate({ newPassword: data.newPassword, code });
    },
    [mutate, search],
  );

  return { register, handleSubmit, errors, isLoading, handleResetPassword, isSuccess };
};
