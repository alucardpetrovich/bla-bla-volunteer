import { Button } from '@mui/material';
import { FormField } from '@ui-kit';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { Auth } from '../Auth';
import {
  ForgotPasswordContainer,
  ForgotPasswordText,
  ForgotPasswordTitle,
  ForgotPasswordWrapper,
} from './ForgotPassword.styles';
import { useForgotPassword } from './useForgotPassword';

export const ForgotPassword: FC = () => {
  const { formatMessage } = useIntl();
  const {
    register,
    handleSubmit,
    handleForgotPassword,
    isLoading,
    isSuccess,
    errors,
    handleForgotPasswordResend,
    timerTime,
    isDisabledResendBtn,
  } = useForgotPassword();

  return (
    <Auth>
      <ForgotPasswordContainer>
        <ForgotPasswordWrapper>
          <ForgotPasswordTitle>
            {formatMessage({
              defaultMessage: 'Відновлення паролю',
              description: 'forgotPassword: title',
            })}
          </ForgotPasswordTitle>
          {isSuccess ? (
            <>
              <ForgotPasswordText>
                {formatMessage({
                  defaultMessage:
                    'Якщо вказаний користувач існує, то на email було надіслано посилання для відновлення пароля.',
                  description: 'forgotPassword: sendToEmail',
                })}
              </ForgotPasswordText>
              <Button
                variant="contained"
                color="primary"
                disabled={isDisabledResendBtn}
                onClick={handleForgotPasswordResend}
              >
                {!!timerTime && `(${timerTime})`}
                {formatMessage({
                  defaultMessage: 'Надіслати повторно',
                  description: 'forgotPassword: resend',
                })}
              </Button>
            </>
          ) : (
            <form onSubmit={handleSubmit(handleForgotPassword)}>
              <FormField
                {...register('email')}
                name="email"
                errorMsg={errors?.email?.message}
                label={formatMessage({
                  defaultMessage: 'Ел. Пошта',
                  description: 'forgotPassword: emailInput',
                })}
                placeholder={formatMessage({
                  defaultMessage: 'Наприклад, example@email.com',
                  description: 'forgotPassword: title',
                })}
              />
              <Button variant="contained" color="info" type="submit" disabled={isLoading}>
                {formatMessage({
                  defaultMessage: 'Продовжити',
                  description: 'forgotPassword: submitButton',
                })}
              </Button>
            </form>
          )}
        </ForgotPasswordWrapper>
      </ForgotPasswordContainer>
    </Auth>
  );
};
