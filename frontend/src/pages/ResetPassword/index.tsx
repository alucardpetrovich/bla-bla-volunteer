import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useSearchParams } from 'react-router-dom';
import AuthContainer from 'src/components/AuthContainer/AuthContainer';
import Button from 'src/components/Buttons/Button';
import TextBox from 'src/components/TextBox/TextBox';
import useNavigation from 'src/hooks/useNavigation';

import { useAppDispatch } from '../../hooks';
import { resetPassword } from '../../store';
import { ResetPasswordContainer, ResetPasswordWrapper } from './style';

export interface IResetPassword {
  passwordFirst: string;
  passwordSecond: string;
  showFirstPassword: boolean;
  showSecondPassword: boolean;
}

const ResetPassword = (): JSX.Element => {
  const initialState = {
    passwordFirst: '',
    passwordSecond: '',
    showFirstPassword: false,
    showSecondPassword: false,
  };
  const { formatMessage } = useIntl();
  const dispatch = useAppDispatch();
  const { goToLogin } = useNavigation();
  const [searchParams] = useSearchParams();

  const [password, setPassword] = useState<IResetPassword>(initialState);
  const [isFirstPasswordDisabled, setIsFirstPasswordDisabled] = useState<boolean>(true);
  const [isSecondPasswordDisabled, setIsSecondPasswordDisabled] = useState<boolean>(true);
  const [isPasswordChanged, setIsPasswordChanged] = useState<boolean>(false);

  const { passwordFirst, passwordSecond, showFirstPassword, showSecondPassword } = password;
  const formValidate = isFirstPasswordDisabled || isSecondPasswordDisabled || passwordFirst !== passwordSecond;

  const isDisabledFirstPassword = (value: boolean) => {
    setIsFirstPasswordDisabled(value);
  };

  const isDisabledSecondPassword = (value: boolean) => {
    setIsSecondPasswordDisabled(value);
  };

  const handleFirstPasswordOnChange = (value: string) => {
    setPassword({ ...password, passwordFirst: value });
  };

  const handleSecondPasswordOnChange = (value: string) => {
    setPassword({ ...password, passwordSecond: value });
  };

  const handleClickShowFirstPassword = (): void => {
    setPassword({
      ...password,
      showFirstPassword: !showFirstPassword,
    });
  };

  const handleClickShowSecondPassword = (): void => {
    setPassword({
      ...password,
      showSecondPassword: !showSecondPassword,
    });
  };

  const handleSubmit = (): void => {
    if (formValidate) return;

    setIsPasswordChanged(true);
    const payload = {
      newPassword: passwordFirst,
      code: searchParams.get('code'),
    };
    dispatch(resetPassword(payload));
  };

  return (
    <AuthContainer>
      <ResetPasswordContainer>
        <ResetPasswordWrapper>
          {!isPasswordChanged ? (
            <>
              <TextBox
                isIncorrectField={isDisabledFirstPassword}
                value={passwordFirst}
                required
                handleClickShowPassword={handleClickShowFirstPassword}
                showPassword={showFirstPassword}
                type={showFirstPassword ? 'text' : 'password'}
                showPasswordIcon
                name="password"
                label={formatMessage({
                  defaultMessage: 'Придумйте новий пароль',
                  description: 'ResetPassword: passwordFirstInput',
                })}
                onChange={handleFirstPasswordOnChange}
                id="reset-first-password"
                fullWidth
              />

              <TextBox
                isIncorrectField={isDisabledSecondPassword}
                value={passwordSecond}
                required
                handleClickShowPassword={handleClickShowSecondPassword}
                showPassword={showSecondPassword}
                type={showSecondPassword ? 'text' : 'password'}
                showPasswordIcon
                name="password"
                label={formatMessage({
                  defaultMessage: 'Повторіть пароль',
                  description: 'ResetPassword: passwordSecondInput',
                })}
                onChange={handleSecondPasswordOnChange}
                id="reset-second-password"
                fullWidth
              />
              <Button
                text={formatMessage({
                  defaultMessage: 'Змінити пароль',
                  description: 'ResetPassword: changePasswordButton',
                })}
                onClick={handleSubmit}
              />
            </>
          ) : (
            <>
              <p>
                {formatMessage({
                  defaultMessage: 'Пароль успішно змінено, перейдіть на сторінку авторизації щоб зайти в додаток',
                  description: 'ResetPassword: changePasswordSuccess',
                })}
              </p>
              <Button
                buttonType="secondary"
                text={formatMessage({
                  defaultMessage: 'Перейти',
                  description: 'ResetPassword: goToLoginButton',
                })}
                onClick={goToLogin}
              />
            </>
          )}
        </ResetPasswordWrapper>
      </ResetPasswordContainer>
    </AuthContainer>
  );
};

export default ResetPassword;
