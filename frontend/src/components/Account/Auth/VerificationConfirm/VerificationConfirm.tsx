import { FC } from 'react';
import { useIntl } from 'react-intl';
import { PATHS } from 'src/components/common/constants/PATH';
import { Spinner } from 'src/components/Layout/Layout';

import { Auth } from '../Auth';
import { useVerificationConfirm } from './useVerificationConfirm';
import { StyledLink, VerificationStatus } from './VerificationConfirm.styled';

export const VerificationConfirm: FC = () => {
  const { isSuccess, isLoading } = useVerificationConfirm();
  const { formatMessage } = useIntl();

  return (
    <Auth>
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <VerificationStatus>
              {isSuccess
                ? formatMessage({
                    defaultMessage: 'Ви успішно верифікували акаунт!',
                    description: 'Verification: success',
                  })
                : formatMessage({
                    defaultMessage: 'Помилка активації акаунта!',
                    description: 'Verification: error',
                  })}
            </VerificationStatus>
            <StyledLink to={PATHS.LOGIN}>OK</StyledLink>
          </>
        )}
      </>
    </Auth>
  );
};
