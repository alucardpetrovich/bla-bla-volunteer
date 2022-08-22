import { Button } from '@mui/material';
import { FormField } from '@ui-kit';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { Link } from '../../../common/components/Link/Link';
import { PATHS } from '../../../common/constants/PATH';
import { Auth } from '../Auth';
import { Container, PasswordField, StyledLink, Title, Wrapper } from './Login.styles';
import { useLogin } from './useLogin';

export const Login: FC = () => {
  const { formatMessage } = useIntl();
  const { register, handleSubmit, errors, handleSignIn, isLoading } = useLogin();
  return (
    <Auth>
      <Wrapper>
        <Container>
          <Title>
            {formatMessage({
              defaultMessage: 'Вхід',
              description: 'Login: title',
            })}
          </Title>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <FormField
              {...register('email')}
              name="email"
              errorMsg={errors?.email?.message}
              label={formatMessage({
                defaultMessage: 'Ел. Пошта',
                description: 'Login: emailInput',
              })}
            />
            <PasswordField
              {...register('password')}
              name="password"
              errorMsg={errors?.password?.message}
              label={formatMessage({
                defaultMessage: 'Пароль',
                description: 'Login: passwordInput',
              })}
            />
            <Link to={PATHS.FORGOT_PASSWORD}>
              <StyledLink>
                {formatMessage({
                  defaultMessage: 'Забув пароль',
                  description: 'Login: forgotPassword',
                })}
              </StyledLink>
            </Link>
            <Button variant="contained" color="info" type="submit" disabled={isLoading}>
              {formatMessage({
                defaultMessage: 'Увійти',
                description: 'Login: signInButton',
              })}
            </Button>
          </form>
        </Container>
      </Wrapper>
    </Auth>
  );
};
