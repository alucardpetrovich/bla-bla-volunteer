import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { emailSchema, FormatMessage } from '@ui-kit';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-use';
import { InferType, object } from 'yup';

import { useLocale } from '../../../common/hooks/useLocale';
import { useRecaptcha } from '../../../common/hooks/useRecaptcha';
import axios from '../../../common/utils/axios';

const START_TIME = 5;
const END_TIME = 0;
const TIMER_DELAY = 1000;

interface SendResetPasswordLinkData {
  email: string;
  baseUrl: string;
  recaptchaResponse?: string;
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
  const { getCaptchaToken } = useRecaptcha();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<InferType<ReturnType<typeof schema>>>({ email: '' });
  const [timerTime, setTimerTime] = useState<number | null>(null);
  const [isDisabledResendBtn, setIsDisabledResendBtn] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InferType<ReturnType<typeof schema>>>({
    reValidateMode: 'onChange',
    shouldUnregister: true,
    resolver: yupResolver(schema(formatMessage)),
  });

  const {
    mutate,
    isLoading,
    isSuccess: isSuccessPatch,
  } = useMutation(sendResetPasswordLink, {
    onError: () => {
      toast.error(formatMessage({ defaultMessage: 'Помилка', description: 'Forgot Password: error msg' }));
    },
  });

  const handleForgotPassword = useCallback(
    async (data: InferType<ReturnType<typeof schema>>) => {
      const token = await getCaptchaToken();

      setFormData(data);
      mutate({ ...data, baseUrl: origin + '/' + locale, recaptchaResponse: token });

      setTimerTime(START_TIME);
    },
    [getCaptchaToken, mutate, origin, locale],
  );

  useEffect(() => {
    if (!isSuccess && isSuccessPatch) {
      setIsSuccess(true);
    }
  }, [isSuccess, isSuccessPatch]);

  useEffect(() => {
    if (timerTime === END_TIME) {
      setIsDisabledResendBtn(false);
      return;
    }

    if (timerTime === START_TIME) {
      setIsDisabledResendBtn(true);
    }

    setTimeout(() => {
      if (timerTime) {
        setTimerTime(timerTime - 1);
      }
    }, TIMER_DELAY);
  }, [timerTime]);

  const handleForgotPasswordResend = useCallback(async () => {
    const token = await getCaptchaToken();

    mutate({ ...formData, baseUrl: origin + '/' + locale, recaptchaResponse: token });

    setTimerTime(START_TIME);
  }, [formData, getCaptchaToken, locale, mutate, origin]);

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    handleForgotPassword,
    isSuccess,
    handleForgotPasswordResend,
    timerTime,
    isDisabledResendBtn,
  };
};
