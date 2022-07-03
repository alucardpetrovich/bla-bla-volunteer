import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'src/components/Buttons/Button';
import TextBox from 'src/components/TextBox/TextBox';
import { PATHS } from 'src/constants/PATH';

import { userLogin } from '../../store';
import { ForgotPasswordLink, LoginFormContainerDiv, LoginFormWrapperDiv, LoginTitle, StyledTitleDiv } from './style';

interface LoginProps {
  email: string;
  password: string;
  showPassword: boolean;
}

const Login = (): JSX.Element => {
  const [loginFormValues, setLoginFormValues] = useState<LoginProps>({
    email: '',
    password: '',
    showPassword: false,
  });

  const { email, password, showPassword } = loginFormValues;

  const dispatch = useDispatch();

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
      dispatch(userLogin(credentials) as never);
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
        <p>Вхід / реєстрація</p>
      </StyledTitleDiv>
      <LoginFormContainerDiv>
        <LoginFormWrapperDiv>
          <LoginTitle>Вхід</LoginTitle>
          <TextBox
            isIncorrectField={isDisabledEmail}
            value={email}
            required
            onChange={handleEmailOnChange}
            name="email"
            label="Ел. Пошта"
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
            label="Пароль"
            onChange={handlePasswordOnChange}
            id="login-password"
            fullWidth
          />
          {/* TODO: змінити пас коли буде сторінка на яку має переводити при натисканні лінки */}
          <ForgotPasswordLink to={`../${PATHS.NOT_FOUND_404.path}`}>Забув пароль</ForgotPasswordLink>
          <Button isDisabled={isDisabled} text={'Увійти'} onClick={handleSubmit} />
        </LoginFormWrapperDiv>
      </LoginFormContainerDiv>
    </>
  );
};

export default Login;
