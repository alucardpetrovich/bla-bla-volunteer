import { useState } from 'react';
import { useIntl } from 'react-intl';
import Button from 'src/components/Buttons/Button';
import TextBox from 'src/components/TextBox/TextBox';
import { PATHS } from 'src/constants/PATH';

import { useAppDispatch } from '../../hooks';
import { userLogin } from '../../store';
import { ForgotPasswordLink, LoginFormContainerDiv, LoginFormWrapperDiv, LoginTitle, StyledTitleDiv } from './style';

interface LoginProps {
  email: string;
  password: string;
  showPassword: boolean;
}

const Login = (): JSX.Element => {
  const { formatMessage } = useIntl();
  const [loginFormValues, setLoginFormValues] = useState<LoginProps>({
    email: '',
    password: '',
    showPassword: false,
  });

  const { email, password, showPassword } = loginFormValues;

  const dispatch = useAppDispatch();

  const [isEmailFieldDisabled, setIsEmailFieldDisabled] = useState<boolean>(true);
  const [isPasswordFieldDisabled, setIsPasswordFieldDisabled] = useState<boolean>(true);

  const isDisabledEmail = (value: boolean) => {
    setIsEmailFieldDisabled(value);
  };
  const isDisabledPassword = (value: boolean) => {
    setIsPasswordFieldDisabled(value);
  };

  const handleSubmit = (): void => {
    const credentials = {
      email: loginFormValues.email,
      password: loginFormValues.password,
    };

    try {
      dispatch(userLogin(credentials));
    } catch (error) {
      console.log('error', error);
    }
  };

  const handlePasswordOnChange = (value: string): void => {
    setLoginFormValues({ ...loginFormValues, password: value });
  };

  const handleEmailOnChange = (value: string): void => {
    setLoginFormValues({ ...loginFormValues, email: value });
  };

  const handleClickShowPassword = (): void => {
    setLoginFormValues({
      ...loginFormValues,
      showPassword: !showPassword,
    });
  };

  const isDisabled = isEmailFieldDisabled || isPasswordFieldDisabled;

  return (
    <>
      <StyledTitleDiv>
        <p>
          {formatMessage({
            defaultMessage: 'вхід / реєстрація',
            description: 'Login: title',
          })}
        </p>
      </StyledTitleDiv>
      <LoginFormContainerDiv>
        <LoginFormWrapperDiv>
          <LoginTitle>
            {formatMessage({
              defaultMessage: 'Вхід',
              description: 'Login: title',
            })}
          </LoginTitle>
          <TextBox
            isIncorrectField={isDisabledEmail}
            value={email}
            required
            onChange={handleEmailOnChange}
            name="email"
            label={formatMessage({
              defaultMessage: 'Ел. Пошта',
              description: 'Login: emailInput',
            })}
            id="login-email"
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
              description: 'Login: passwordInput',
            })}
            onChange={handlePasswordOnChange}
            id="login-password"
            fullWidth
          />
          {/* TODO: змінити пас коли буде сторінка на яку має переводити при натисканні лінки */}
          <ForgotPasswordLink to={`../${PATHS.NOT_FOUND_404.path}`}>
            {formatMessage({
              defaultMessage: 'Забув пароль',
              description: 'Login: forgotPassword',
            })}
          </ForgotPasswordLink>
          <Button
            isDisabled={isDisabled}
            text={formatMessage({
              defaultMessage: 'Увійти',
              description: 'Login: signInButton',
            })}
            onClick={handleSubmit}
          />
        </LoginFormWrapperDiv>
      </LoginFormContainerDiv>
    </>
  );
};

export default Login;
