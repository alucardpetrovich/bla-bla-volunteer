import { FC, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import { PATHS } from 'src/components/common/constants/PATH';
import { Spinner } from 'src/components/Layout/Layout';

import { Auth } from '../Auth';
import { useVerificationConfirm } from './useVerificationConfirm';
import { StyledLink, VerificationStatus } from './VerificationConfirm.styled';

export const VerificationConfirm: FC = () => {
  const { token } = useParams();
  const { isSuccess, isLoading, isError, mutate } = useVerificationConfirm();
  const { formatMessage } = useIntl();
  useEffect(() => {
    mutate(token);
  }, [mutate, token]);

  return (
    <Auth>
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <VerificationStatus>
              {isSuccess &&
                formatMessage({
                  defaultMessage: 'Ви успішно верифікували акаунт!',
                  description: 'Verification: success',
                })}
              {isError &&
                formatMessage({
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
