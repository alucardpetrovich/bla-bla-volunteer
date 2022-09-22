import { useMutation } from '@tanstack/react-query';
import { emailSchema, FormatMessage } from '@ui-kit';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useIntl } from 'react-intl';
import { useLocation as useLocationRouter } from 'react-router';
import { useLocation } from 'react-use';
import { useLocale } from 'src/components/common/hooks/useLocale';
import { useRecaptcha } from 'src/components/common/hooks/useRecaptcha';
import axios from 'src/components/common/utils/axios';
import { InferType, object } from 'yup';

const START_TIME = 60;
const END_TIME = 0;
const TIMER_DELAY = 1000;

interface resendVerificationLinkData {
  email: string;
  baseUrl: string;
  recaptchaResponse?: string;
}

const schema = (t: FormatMessage) =>
  object({
    email: emailSchema(t),
  });

export const resendVerificationLink = (payload: resendVerificationLinkData): Promise<void> => {
  return axios.patch('/v1/auth/resend-verification-link', payload);
};

export const useResendVereficationLink = () => {
  const { formatMessage } = useIntl();
  const { origin } = useLocation();
  const { email } = useLocationRouter().state as InferType<ReturnType<typeof schema>>;
  const { locale } = useLocale();
  const { getCaptchaToken } = useRecaptcha();
  const [timerTime, setTimerTime] = useState(START_TIME);
  const [isDisabledResendBtn, setIsDisabledResendBtn] = useState(true);

  const { mutate, isLoading, isSuccess } = useMutation(resendVerificationLink, {
    onError: () => {
      toast.error(formatMessage({ defaultMessage: 'Помилка', description: 'Resend Verification Link: error msg' }));
    },
    onSuccess: () => {
      setTimerTime(START_TIME);
    },
  });

  useEffect(() => {
    if (timerTime === END_TIME) {
      setIsDisabledResendBtn(false);
      return;
    }

    if (timerTime === START_TIME) {
      setIsDisabledResendBtn(true);
    }

    const timer = setTimeout(() => {
      if (timerTime) {
        setTimerTime(timerTime - 1);
      }
    }, TIMER_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, [timerTime]);

  const handleResendVerificationLink = useCallback(async () => {
    const token = await getCaptchaToken();
    mutate({ email, baseUrl: origin + '/' + locale, recaptchaResponse: token });
  }, [getCaptchaToken, mutate, email, origin, locale]);

  return { timerTime, handleResendVerificationLink, isLoading, isSuccess, isDisabledResendBtn };
};
