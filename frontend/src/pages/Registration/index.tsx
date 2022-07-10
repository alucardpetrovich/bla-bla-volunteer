import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import AuthContainer from 'src/components/AuthContainer/AuthContainer';
import Button from 'src/components/Buttons/Button';
import Checkbox from 'src/components/Checkbox/CheckBox';
import TextBox from 'src/components/TextBox/TextBox';
import useNavigation from 'src/hooks/useNavigation';

import { useAppDispatch } from '../../hooks';
import { IAuthCredentials } from '../../models/authModel/authModel';
import { userRegistration } from '../../store';
import { RegisterFormContainerDiv, RegisterFormWrapperDiv, RegisterTitle, StyledInnerText, StyledText } from './style';

const Registration = () => {
  const initialCredentialsState = {
    nickName: '',
    email: '',
    password: '',
    phoneNumber: '',
    showPassword: false,
    phoneNumberAccessMode: 'read_only_me',
  };
  const { formatMessage } = useIntl();
  const { goToLogin, goToVerificationPage } = useNavigation();

  const [credentials, setCredentials] = useState<IAuthCredentials>(initialCredentialsState as IAuthCredentials);
  const [isEmailFieldDisabled, setIsEmailFieldDisabled] = useState<boolean>(true);
  const [isPasswordFieldDisabled, setIsPasswordFieldDisabled] = useState<boolean>(true);
  const [isNickNameFieldDisabled, setIsNickNameFieldDisabled] = useState<boolean>(true);
  const [isPhoneNumberFieldDisabled, setIsPhoneNumberFieldDisabled] = useState<boolean>(true);
  const [isPhonePublic, setIsPhonePublic] = useState<boolean>(false);
  const [isPhoneByRequest, setIsPhoneByRequest] = useState<boolean>(false);

  const formValidate =
    isEmailFieldDisabled || isPasswordFieldDisabled || isNickNameFieldDisabled || isPhoneNumberFieldDisabled;

  useEffect(() => {
    if (isPhonePublic && !isPhoneByRequest) {
      setCredentials({
        ...credentials,
        phoneNumberAccessMode: 'public',
      });
    }

    if (isPhoneByRequest && !isPhonePublic) {
      setCredentials({
        ...credentials,
        phoneNumberAccessMode: 'read_by_request',
      });
    }

    if (!isPhoneByRequest && !isPhonePublic) {
      setCredentials({
        ...credentials,
        phoneNumberAccessMode: 'read_only_me',
      });
    }
  }, [isPhonePublic, isPhoneByRequest]);

  const isDisabledEmail = (value: boolean) => {
    setIsEmailFieldDisabled(value);
  };
  const isDisabledPassword = (value: boolean) => {
    setIsPasswordFieldDisabled(value);
  };
  const isDisabledNickName = (value: boolean) => {
    setIsNickNameFieldDisabled(value);
  };
  const isDisabledPhoneNumber = (value: boolean) => {
    setIsPhoneNumberFieldDisabled(value);
  };

  const { nickName, email, password, phoneNumber, showPassword, phoneNumberAccessMode } = credentials;

  const dispatch = useAppDispatch();

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
    const phoneNumberValue = value.replace(/[^0-9+]/g, '');
    setCredentials({ ...credentials, phoneNumber: phoneNumberValue });
  };

  const handleClickShowPassword = (): void => {
    setCredentials({
      ...credentials,
      showPassword: !showPassword,
    });
  };

  const handleSubmitSignUp = () => {
    if (formValidate) return;

    const payload = {
      nickname: nickName || '',
      email,
      phoneNumber: phoneNumber || '',
      phoneNumberAccessMode: phoneNumberAccessMode || 'read_only_me',
      password,
    };
    dispatch(userRegistration(payload));
    goToVerificationPage();
  };

  const handlePublicPhoneCheckbox = () => {
    setIsPhoneByRequest(false);
    setIsPhonePublic(!isPhonePublic);
  };

  const handleByRequestPhoneCheckbox = () => {
    setIsPhonePublic(false);
    setIsPhoneByRequest(!isPhoneByRequest);
  };

  return (
    <AuthContainer>
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
            isIncorrectField={isDisabledPhoneNumber}
            value={phoneNumber ? phoneNumber : ''}
            onChange={handlePhoneNumberOnChange}
            name="phoneNumber"
            placeholder="+38(099)999-99-99"
            label={formatMessage({
              defaultMessage: 'Номер телефону',
              description: 'Registration: phoneNumberInput',
            })}
            id="register-phoneNumber"
            fullWidth
          />
          <Checkbox
            label={formatMessage({
              defaultMessage: 'Номер телефону доступний всім',
              description: 'Registration: isPublicCheckbox',
            })}
            name="publicPhoneCheckbox"
            checked={isPhonePublic}
            handleChange={handlePublicPhoneCheckbox}
          />
          <Checkbox
            label={formatMessage({
              defaultMessage: 'Номер телефону доступний за запитом',
              description: 'Registration: isByRequest',
            })}
            name="publicPhoneCheckbox"
            checked={isPhoneByRequest}
            handleChange={handleByRequestPhoneCheckbox}
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
          <Button text="Зареєструватися" marginBottom={21} onClick={handleSubmitSignUp} />
          <Button buttonType="tertiary" onClick={goToLogin}>
            {formatMessage({
              defaultMessage: 'Я вже зареєстрований',
              description: 'Registration: alreadyRegisteredButton',
            })}
          </Button>
        </RegisterFormWrapperDiv>
      </RegisterFormContainerDiv>
    </AuthContainer>
  );
};

export default Registration;
