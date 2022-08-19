import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { PATHS } from '../../../common/constants/PATH';
import { useNavigation } from '../../../common/hooks/useNavigation';
import { Auth } from '../Auth';
import { PasswordField } from '../Login/Login.styles';
import { ResetPasswordContainer, ResetPasswordText, ResetPasswordWrapper } from './ResetPassword.styles';
import { useResetPassword } from './useResetPassword';

export const ResetPassword: FC = () => {
  const { formatMessage } = useIntl();
  const toLogin = useNavigation(PATHS.LOGIN);
  const { handleResetPassword, handleSubmit, isLoading, isSuccess, register, errors } = useResetPassword();

  return (
    <Auth>
      <ResetPasswordContainer>
        <ResetPasswordWrapper>
          {isSuccess ? (
            <>
              <ResetPasswordText>
                {formatMessage({
                  defaultMessage: 'Пароль успішно змінено, перейдіть на сторінку авторизації щоб зайти в додаток',
                  description: 'ResetPassword: changePasswordSuccess',
                })}
              </ResetPasswordText>
              <Button variant="contained" color="info" onClick={toLogin}>
                {formatMessage({
                  defaultMessage: 'Перейти',
                  description: 'ResetPassword: goToLoginButton',
                })}
              </Button>
            </>
          ) : (
            <form onSubmit={handleSubmit(handleResetPassword)}>
              <PasswordField
                {...register('newPassword')}
                name="newPassword"
                errorMsg={errors?.newPassword?.message}
                label={formatMessage({
                  defaultMessage: 'Придумйте новий пароль',
                  description: 'ResetPassword: passwordInput',
                })}
              />
              <PasswordField
                {...register('repeatPassword')}
                name="repeatPassword"
                errorMsg={errors?.repeatPassword?.message}
                label={formatMessage({
                  defaultMessage: 'Повторіть пароль',
                  description: 'ResetPassword: passwordSecondInput',
                })}
              />

              <Button variant="contained" color="info" type="submit" disabled={isLoading}>
                {formatMessage({
                  defaultMessage: 'Змінити пароль',
                  description: 'ResetPassword: changePasswordButton',
                })}
              </Button>
            </form>
          )}
        </ResetPasswordWrapper>
      </ResetPasswordContainer>
    </Auth>
  );
};
