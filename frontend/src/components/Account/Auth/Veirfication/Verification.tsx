import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { Auth } from '../Auth';
import { VerificationContainer, VerificationText, VerificationTitle, VerificationWrapper } from './Verification.styles';

export const Veirfication: FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Auth>
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
    </Auth>
  );
};
