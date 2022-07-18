import { FC, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import useNavigation from 'src/hooks/useNavigation';

import { StyledAuthContainer, StyledAuthSpanText, StyledAuthText } from './style';

export interface iAuthContainerProps {
  children: ReactNode;
}

const AuthContainer: FC<iAuthContainerProps> = ({ children }): JSX.Element => {
  const { formatMessage } = useIntl();
  const { goToLogin, goToRegistration } = useNavigation();

  return (
    <div>
      <StyledAuthContainer>
        <StyledAuthText>
          <StyledAuthSpanText onClick={goToLogin}>
            {formatMessage({
              defaultMessage: 'вхід',
              description: 'AuthContainer: titleSignIn',
            })}
          </StyledAuthSpanText>
          {' / '}
          <StyledAuthSpanText onClick={goToRegistration}>
            {formatMessage({
              defaultMessage: 'реєстрація',
              description: 'AuthContainer: titleSignUp',
            })}
          </StyledAuthSpanText>
        </StyledAuthText>
        {children}
      </StyledAuthContainer>
    </div>
  );
};

export default AuthContainer;
