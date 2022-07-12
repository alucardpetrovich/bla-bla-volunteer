import { useIntl } from 'react-intl';
import AuthContainer from 'src/components/AuthContainer/AuthContainer';

import { VerificationContainer, VerificationText, VerificationTitle, VerificationWrapper } from './style';

const Verification = (): JSX.Element => {
  const { formatMessage } = useIntl();

  return (
    <AuthContainer>
      <VerificationContainer>
        <VerificationWrapper>
          <VerificationTitle>
            {formatMessage({
              defaultMessage: 'Будь-ласка, верифікуйте ваш акаунт',
              description: 'Verification: title',
            })}
          </VerificationTitle>
          <VerificationText>
            {formatMessage({
              defaultMessage: 'Відкрийте лист на вашій електронній пошті та пройдіть за посиланням',
              description: 'Verification: text',
            })}
          </VerificationText>
        </VerificationWrapper>
      </VerificationContainer>
    </AuthContainer>
  );
};

export default Verification;
