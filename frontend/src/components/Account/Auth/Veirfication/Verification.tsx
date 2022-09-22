import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { PATHS } from 'src/components/common/constants/PATH';
import { useNavigation } from 'src/components/common/hooks/useNavigation';

import { Auth } from '../Auth';
import { useResendVereficationLink } from './useResendVereficationLink';
import {
  NavigateButton,
  ResendButton,
  VerificationContainer,
  VerificationText,
  VerificationTitle,
  VerificationWrapper,
} from './Verification.styles';

export const Veirfication: FC = () => {
  const { formatMessage } = useIntl();
  const toLogin = useNavigation(PATHS.LOGIN);

  const { timerTime, handleResendVerificationLink, isDisabledResendBtn } = useResendVereficationLink();

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
          <ResendButton
            variant="contained"
            color="primary"
            disabled={isDisabledResendBtn}
            onClick={handleResendVerificationLink}
          >
            {!!timerTime && `(${timerTime})`}
            {formatMessage({
              defaultMessage: 'Надіслати повторно',
              description: 'ResendVerificationLink: resend',
            })}
          </ResendButton>
          <NavigateButton variant="contained" color="primary" type="button" onClick={toLogin}>
            OK
          </NavigateButton>
        </VerificationWrapper>
      </VerificationContainer>
    </Auth>
  );
};
