import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { emailSchema, FormatMessage } from '@ui-kit';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-use';
import { InferType, object } from 'yup';

import { useLocale } from '../../../common/hooks/useLocale';
import axios from '../../../common/utils/axios';

interface SendResetPasswordLinkData {
  email: string;
  baseUrl: string;
}

const sendResetPasswordLink = (payload: SendResetPasswordLinkData): Promise<void> => {
  return axios.patch('/v1/auth/send-reset-password-link', payload);
};

const schema = (t: FormatMessage) =>
  object({
    email: emailSchema(t),
  });

export const useForgotPassword = () => {
  const { formatMessage } = useIntl();
  const { origin } = useLocation();
  const { locale } = useLocale();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InferType<ReturnType<typeof schema>>>({
    reValidateMode: 'onChange',
    shouldUnregister: true,
    resolver: yupResolver(schema(formatMessage)),
  });

  const { mutate, isLoading, isSuccess } = useMutation(sendResetPasswordLink, {
    onError: () => {
      toast.error(formatMessage({ defaultMessage: 'Помилка', description: 'Forgot Password: error msg' }));
    },
  });

  const handleForgotPassword = useCallback(
    (data: InferType<ReturnType<typeof schema>>) => {
      mutate({ ...data, baseUrl: origin + '/' + locale });
    },
    [mutate, origin, locale],
  );

  return { register, handleSubmit, errors, isLoading, handleForgotPassword, isSuccess };
};
