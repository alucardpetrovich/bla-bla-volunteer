import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import Button from 'src/components/Buttons/Button';
import TextBox from 'src/components/TextBox/TextBox';
import { PATHS } from 'src/constants/PATH';

import { IAuthCredentials } from '../../models/authModel/authModel';
import { userRegistration } from '../../store';
import {
  AlreadyRegisteredLink,
  RegisterFormContainerDiv,
  RegisterFormWrapperDiv,
  RegisterTitle,
  StyledInnerText,
  StyledText,
  StyledTitleDiv,
} from './style';

const Registration = () => {
  const initialCredentialsState = {
    nickName: '',
    email: '',
    password: '',
    phoneNumber: '',
    showPassword: false,
    isPhoneVisibleToAllUsers: true,
  };
  const { formatMessage } = useIntl();

  const [credentials, setCredentials] = useState<IAuthCredentials>(initialCredentialsState as IAuthCredentials);
  const [isEmailFieldDisabled, setIsEmailFieldDisabled] = useState<boolean>(true);
  const [isPasswordFieldDisabled, setIsPasswordFieldDisabled] = useState<boolean>(true);
  const [isNickNameFieldDisabled, setIsNickNameFieldDisabled] = useState<boolean>(true);

  const isDisabledEmail = (value: boolean) => {
    setIsEmailFieldDisabled(value);
  };
  const isDisabledPassword = (value: boolean) => {
    setIsPasswordFieldDisabled(value);
  };
  const isDisabledNickName = (value: boolean) => {
    setIsNickNameFieldDisabled(value);
  };

  const { nickName, email, password, phoneNumber, showPassword } = credentials;

  const dispatch = useDispatch();

  const handleEmailOnChange = (value: string) => {
    setCredentials({ ...credentials, email: value });
  };

  const handlePasswordOnChange = (value: string) => {
    setCredentials({ ...credentials, password: value });
  };

  const handleNickNameOnChange = (value: string) => {
    setCredentials({ ...credentials, nickName: value });
  };

  const handlePhoneNumberOnChange = (value: string) => {
    setCredentials({ ...credentials, phoneNumber: value });
  };

  const handleClickShowPassword = (): void => {
    setCredentials({
      ...credentials,
      showPassword: !showPassword,
    });
  };

  const handleSubmitSignUp = () => {
    // FIXME: пофіксить і більше так не робить
    // eslint-disable-next-line
    dispatch(userRegistration(credentials) as any);
    setCredentials(initialCredentialsState);
  };

  const isDisabled = isEmailFieldDisabled || isPasswordFieldDisabled || isNickNameFieldDisabled;

  return (
    <>
      <StyledTitleDiv>
        <p>
          {formatMessage({
            defaultMessage: 'вхід / реєстрація',
            description: 'Registration: title',
          })}
        </p>
      </StyledTitleDiv>
      <RegisterFormContainerDiv>
        <RegisterFormWrapperDiv>
          <RegisterTitle>
            {formatMessage({
              defaultMessage: 'Реєстрація',
              description: 'Registration: title',
            })}
          </RegisterTitle>
          <TextBox
            isIncorrectField={isDisabledNickName}
            value={nickName ? nickName : ''}
            required
            onChange={handleNickNameOnChange}
            name="nickName"
            label={formatMessage({
              defaultMessage: 'Придумайте нікнейм',
              description: 'Registration: nickNameInput',
            })}
            id="register-nickName"
            fullWidth
          />
          <StyledText>
            {formatMessage({
              defaultMessage: 'Для забезпечення вашої безпеки ми не рекомендуємо вводити власне ім’я та прізвище',
              description: 'Registration: nickNamePrivacyInfo',
            })}
          </StyledText>
          <TextBox
            isIncorrectField={isDisabledEmail}
            value={email}
            required
            onChange={handleEmailOnChange}
            name="email"
            label={formatMessage({
              defaultMessage: 'Ел. Пошта',
              description: 'Registration: emailInput',
            })}
            id="register-email"
            fullWidth
          />
          <TextBox
            value={phoneNumber ? phoneNumber : ''}
            onChange={handlePhoneNumberOnChange}
            name="phoneNumber"
            label={formatMessage({
              defaultMessage: 'Номер телефону',
              description: 'Registration: phoneNumberInput',
            })}
            id="register-phoneNumber"
            fullWidth
          />
          <TextBox
            isIncorrectField={isDisabledPassword}
            value={password}
            required
            handleClickShowPassword={handleClickShowPassword}
            showPassword={showPassword}
            type={showPassword ? 'text' : 'password'}
            showPasswordIcon
            name="password"
            label={formatMessage({
              defaultMessage: 'Пароль',
              description: 'Registration: passwordInput',
            })}
            onChange={handlePasswordOnChange}
            id="login-password"
            fullWidth
          />
          <StyledText>
            {formatMessage({
              defaultMessage: 'Реєструючись, ви погоджуєтеся з умовами',
              description: 'Registration: licenseInfo',
            })}{' '}
            <StyledInnerText>
              {formatMessage({
                defaultMessage: 'положення про обробку і захист персональних даних та угодою користувача',
                description: 'Registration: licenseInfo',
              })}
            </StyledInnerText>
          </StyledText>
          <Button isDisabled={isDisabled} text="Зареєструватися" marginBottom={21} onClick={handleSubmitSignUp} />
          <Button buttonType="tertiary">
            <AlreadyRegisteredLink to={`../${PATHS.LOGIN.path}`}>
              {formatMessage({
                defaultMessage: 'Я вже зареєстрований',
                description: 'Registration: alreadyRegisteredButton',
              })}
            </AlreadyRegisteredLink>
          </Button>
        </RegisterFormWrapperDiv>
      </RegisterFormContainerDiv>
    </>
  );
};

export default Registration;
