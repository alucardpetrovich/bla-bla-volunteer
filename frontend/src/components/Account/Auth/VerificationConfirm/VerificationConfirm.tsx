import { FC } from 'react';
import { useIntl } from 'react-intl';
import { PATHS } from 'src/components/common/constants/PATH';
import { useNavigation } from 'src/components/common/hooks/useNavigation';
import { Spinner } from 'src/components/Layout/Layout';

import { Auth } from '../Auth';
import { NavigateButton } from '../Veirfication/Verification.styles';
import { useVerificationConfirm } from './useVerificationConfirm';
import { VerificationStatus } from './VerificationConfirm.styled';

export const VerificationConfirm: FC = () => {
  const { isSuccess, isLoading } = useVerificationConfirm();
  const { formatMessage } = useIntl();
  const toLogin = useNavigation(PATHS.LOGIN);

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
            <NavigateButton variant="contained" color="primary" type="button" onClick={toLogin}>
              OK
            </NavigateButton>
          </>
        )}
      </>
    </Auth>
  );
};
