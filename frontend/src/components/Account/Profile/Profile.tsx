import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { useCurrentUserInfoQuery } from '../../common/hooks/useCurrentUserInfoQuery';
import { Title } from './Profile.styles';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { Roles } from './Roles/Roles';

export const Profile: FC = () => {
  const { formatMessage } = useIntl();
  const { data: user } = useCurrentUserInfoQuery();

  return (
    <>
      <Title>
        {formatMessage({
          defaultMessage: 'особистий кабінет',
          description: 'Roles: title',
        })}
      </Title>
      {user?.hasUserRole ? <ProfileInfo /> : <Roles />}
    </>
  );
};
