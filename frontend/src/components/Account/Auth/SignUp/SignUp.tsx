import { FormContactField, FormField, PasswordField } from '@ui-kit';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { Auth } from '../Auth';
import { Button, Container, NickNameWarning, StyledInnerText, StyledText, Title, Wrapper } from './SignUp.styles';
import { useSignUp } from './useSignUp';

export const SignUp: FC = () => {
  const { formatMessage } = useIntl();
  const { isLoading, handleSignUp, handleSubmit, errors, register, toLogin } = useSignUp();

  return (
    <Auth>
      <Wrapper>
        <Container>
          <Title>
            {formatMessage({
              defaultMessage: 'Реєстрація',
              description: 'Registration: title',
            })}
          </Title>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <FormField
              {...register('nickname')}
              name="nickname"
              errorMsg={errors?.nickname?.message}
              label={formatMessage({
                defaultMessage: 'Придумайте нікнейм',
                description: 'Registration: nickNameInput',
              })}
            />
            <NickNameWarning>
              {formatMessage({
                defaultMessage: 'Для забезпечення вашої безпеки ми не рекомендуємо вводити власне ім’я та прізвище',
                description: 'Registration: nickNamePrivacyInfo',
              })}
            </NickNameWarning>
            <FormField
              {...register('email')}
              name="email"
              errorMsg={errors?.email?.message}
              label={formatMessage({
                defaultMessage: 'Ел. Пошта',
                description: 'Registration: emailInput',
              })}
            />
            <FormContactField
              register={register}
              inputName="phoneNumber"
              checkboxName="phoneNumberAccessMode"
              placeholder="38(099)999-99-99"
              label={formatMessage({
                defaultMessage: 'Номер телефону',
                description: 'Registration: phoneNumberInput',
              })}
              errorMsg={errors?.phoneNumber?.message}
            />
            <PasswordField
              {...register('password')}
              name="password"
              errorMsg={errors?.password?.message}
              label={formatMessage({
                defaultMessage: 'Пароль',
                description: 'Registration: passwordInput',
              })}
            />
            <StyledText>
              {formatMessage({
                defaultMessage: 'Реєструючись, ви погоджуєтеся з умовами',
                description: 'Registration: licenseInfo',
              })}{' '}
              <StyledInnerText href="https://google.com" target="_blank">
                {formatMessage({
                  defaultMessage: 'положення про обробку і захист персональних даних та угодою користувача',
                  description: 'Registration: licenseInfo',
                })}
              </StyledInnerText>
            </StyledText>
            <Button variant="contained" color="info" type="submit" disabled={isLoading}>
              {formatMessage({
                defaultMessage: 'Зареєструватися',
                description: 'Registration: signUpButton',
              })}
            </Button>
            <Button variant="outlined" color="secondary" type="button" disabled={isLoading} onClick={toLogin}>
              {formatMessage({
                defaultMessage: 'Я вже зареєстрований',
                description: 'Registration: login redirect',
              })}
            </Button>
          </form>
        </Container>
      </Wrapper>
    </Auth>
  );
};
