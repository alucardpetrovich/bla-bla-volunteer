import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import { useLocation } from 'react-use';
import AuthContainer from 'src/components/AuthContainer/AuthContainer';
import Button from 'src/components/Buttons/Button';
import TextBox from 'src/components/TextBox/TextBox';

import { useAppDispatch } from '../../hooks';
import { sendResetPasswordLink } from '../../store';
import {
  ActionButtonWrapper,
  ForgotPasswordContainer,
  ForgotPasswordText,
  ForgotPasswordTitle,
  ForgotPasswordWrapper,
} from './style';

const ForgotPassword = (): JSX.Element => {
  const { formatMessage } = useIntl();
  const { host } = useLocation();
  const { lang } = useParams();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [isEmailFieldDisabled, setIsEmailFieldDisabled] = useState<boolean>(true);
  const [isSended, setIsSended] = useState<boolean>(false);

  const isDisabledEmail = (value: boolean) => {
    setIsEmailFieldDisabled(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSubmit = () => {
    setIsSended(true);
    //! коли буде PROCESS_ENV то для продакшена має бути 'https'
    const payload = { email, baseUrl: `http://${host}/${lang}` };
    dispatch(sendResetPasswordLink(payload));
  };

  return (
    <AuthContainer>
      <ForgotPasswordContainer>
        <ForgotPasswordWrapper>
          <ForgotPasswordTitle>
            {formatMessage({
              defaultMessage: 'Відновлення паролю',
              description: 'forgotPassword: title',
            })}
          </ForgotPasswordTitle>
          {!isSended ? (
            <>
              <TextBox
                required
                label={formatMessage({
                  defaultMessage: 'На цей email ми надішлемо посилання для відновлення пароля',
                  description: 'forgotPassword: text',
                })}
                isIncorrectField={isDisabledEmail}
                value={email}
                placeholder={formatMessage({
                  defaultMessage: 'Наприклад, example@email.com',
                  description: 'forgotPassword: title',
                })}
                name="email"
                onChange={handleEmailChange}
                id="forgot-password-email"
                fullWidth
              />
              <ActionButtonWrapper>
                <Button
                  isDisabled={isEmailFieldDisabled}
                  text={formatMessage({
                    defaultMessage: 'Продовжити',
                    description: 'forgotPassword: submitButton',
                  })}
                  onClick={handleSubmit}
                />
              </ActionButtonWrapper>
            </>
          ) : (
            <ForgotPasswordText>
              {formatMessage(
                {
                  defaultMessage:
                    'Якщо вказаний користувач існує, то на email {email} було надіслано посилання для відновлення пароля.',
                  description: 'forgotPassword: sendToEmail',
                },
                { email },
              )}
            </ForgotPasswordText>
          )}
        </ForgotPasswordWrapper>
      </ForgotPasswordContainer>
    </AuthContainer>
  );
};

export default ForgotPassword;
