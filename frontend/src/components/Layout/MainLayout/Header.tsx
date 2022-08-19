import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { Link } from '../../common/components/Link/Link';
import { PATHS } from '../../common/constants/PATH';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import { ReactComponent as Arrow } from './assets/arrow.svg';
import { RegistrationLabel, RegistrationLink, RegistrationWrapper, Title, Wrapper } from './Header.styles';

export const Header: FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Wrapper>
      <HeaderNavigation />
      <Title>
        {formatMessage({
          defaultMessage: 'Безпечна платформа координації передачі гуманітарної допомоги',
          description: 'Main/Header: title',
        })}
      </Title>
      <RegistrationWrapper>
        <RegistrationLabel>
          {formatMessage({
            defaultMessage: 'Зареєструйся та стань частиною українського волонтерського руху',
            description: 'Main/Header: Registration label',
          })}
        </RegistrationLabel>
        <Link to={PATHS.REGISTRATION}>
          <RegistrationLink>
            {formatMessage({
              defaultMessage: 'реєстрація',
              description: 'Main/Header: Registration link',
            })}
            <Arrow />
          </RegistrationLink>
        </Link>
      </RegistrationWrapper>
    </Wrapper>
  );
};
