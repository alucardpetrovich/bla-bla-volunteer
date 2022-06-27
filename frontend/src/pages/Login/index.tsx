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

  const dispatch = useDispatch();

  const handleSubmit = (): void => {
    const credentials = {
      email: loginFormValues.email,
      password: loginFormValues.password,
    };

    try {
      dispatch(userLogin(credentials) as never);
      setLoginFormValues({
        ...loginFormValues,
        email: '',
        password: '',
      });
    } catch (error) {
      // eslint-disable-next-line no-console
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
      showPassword: !loginFormValues.showPassword,
    });
  };

  return (
    <>
      <StyledTitleDiv style={{ marginBottom: '55px' }}>
        <p>Вхід / реєстрація</p>
      </StyledTitleDiv>
      <LoginFormContainerDiv style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <LoginFormWrapperDiv style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <LoginTitle style={{ marginBottom: '65px' }}>Вхід</LoginTitle>
          <TextBox
            value={loginFormValues.email}
            required
            onChange={handleEmailOnChange}
            name="email"
            label="Ел. Пошта"
            id="login-email"
            fullWidth
          />
          <TextBox
            value={loginFormValues.password}
            handleClickShowPassword={handleClickShowPassword}
            showPassword={loginFormValues.showPassword}
            type={loginFormValues.showPassword ? 'text' : 'password'}
            showPasswordIcon
            name="password"
            label="Пароль"
            onChange={handlePasswordOnChange}
            id="login-password"
            fullWidth
          />
          <ForgotPasswordLink to={PATHS.NOT_FOUND_404.path}>Забув пароль</ForgotPasswordLink>
          <Button text={'Увійти'} onClick={handleSubmit} />
        </LoginFormWrapperDiv>
      </LoginFormContainerDiv>
    </>
  );
};

export default Login;
