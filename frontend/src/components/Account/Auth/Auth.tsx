import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { Link } from '../../common/components/Link/Link';
import { PATHS } from '../../common/constants/PATH';
import { Container, StyledAuthSpanText, Wrapper } from './Auth.styles';

interface AuthProps {
  children: React.ReactElement;
}

export const Auth: FC<AuthProps> = ({ children }) => {
  const { formatMessage } = useIntl();

  return (
    <Wrapper>
      <Container>
        <Link to={PATHS.LOGIN}>
          <StyledAuthSpanText>
            {formatMessage({
              defaultMessage: 'вхід',
              description: 'AuthContainer: titleSignIn',
            })}
          </StyledAuthSpanText>
        </Link>
        {' / '}
        <Link to={PATHS.REGISTRATION}>
          <StyledAuthSpanText>
            {formatMessage({
              defaultMessage: 'реєстрація',
              description: 'AuthContainer: titleSignUp',
            })}
          </StyledAuthSpanText>
        </Link>
      </Container>
      {children}
    </Wrapper>
  );
};
