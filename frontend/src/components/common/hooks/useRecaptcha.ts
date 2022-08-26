import { useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export const useRecaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getCaptchaToken = useCallback(
    (action = 'submit') => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }

      return executeRecaptcha(action);
    },
    [executeRecaptcha],
  );

  return { getCaptchaToken };
};
