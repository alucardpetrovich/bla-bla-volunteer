import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { emailSchema, errors, FormatMessage, passwordSchema, phoneSchema, stringSchema } from '@ui-kit';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-use';
import { boolean, InferType, object } from 'yup';

import { PATHS } from '../../../common/constants/PATH';
import { useLocale } from '../../../common/hooks/useLocale';
import { useNavigation } from '../../../common/hooks/useNavigation';
import { useRecaptcha } from '../../../common/hooks/useRecaptcha';
import { CurrentUserInfo } from '../../../common/services/api/auth';
import axios from '../../../common/utils/axios';
import { AccessModes } from '../../Profile/ProfileInfo/api/contacts';

interface SignUpData {
  nickname: string;
  email: string;
  phoneNumber: string;
  phoneNumberAccessMode: AccessModes;
  password: string;
  recaptchaResponse?: string;
  baseUrl: string;
}

interface SignUpResponse {
  user: CurrentUserInfo;
}

export const signUp = async (payload: SignUpData): Promise<SignUpResponse> => {
  const response = await axios.post('/v1/auth/sign-up', payload);
  return response.data;
};

const schema = (t: FormatMessage) =>
  object({
    nickname: stringSchema(t),
    email: emailSchema(t),
    phoneNumber: phoneSchema(t),
    phoneNumberAccessMode: boolean().required(errors.any.required),
    password: passwordSchema(t, 6),
  });

export const useSignUp = () => {
  const { formatMessage } = useIntl();
  const toVerification = useNavigation(PATHS.VERIFICATION);
  const toLogin = useNavigation(PATHS.LOGIN);
  const { origin } = useLocation();
  const { locale } = useLocale();
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

  const { mutate, isLoading } = useMutation(signUp, {
    onSuccess() {
      toVerification();
    },
  });

  const handleSignUp = useCallback(
    async (data: InferType<ReturnType<typeof schema>>) => {
      const token = await getCaptchaToken();

      const d = {
        ...data,
        phoneNumberAccessMode: data.phoneNumberAccessMode ? AccessModes.PUBLIC : AccessModes.READ_ONLY_ME,
        baseUrl: origin + '/' + locale,
        recaptchaResponse: token,
      };

      mutate(d);
    },
    [getCaptchaToken, locale, mutate, origin],
  );

  return { register, errors, isLoading, handleSignUp, handleSubmit, toLogin };
};
