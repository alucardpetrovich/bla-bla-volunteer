import { Accordion } from '@ui-kit';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { UserInfo } from '../UserInfo/UserInfo';
import { RoleInfo } from './RoleInfo';

export const ProfileInfo: FC = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Accordion
        defaultExpanded={true}
        title={formatMessage({
          defaultMessage: 'Ваша роль',
          description: 'Profile: role',
        })}
      >
        {{ content: <RoleInfo /> }}
      </Accordion>
      <Accordion
        defaultExpanded={true}
        title={formatMessage({
          defaultMessage: 'Особисті дані',
          description: 'Profile: personalData',
        })}
      >
        {{ content: <UserInfo /> }}
      </Accordion>
      <Accordion
        title={formatMessage({
          defaultMessage: 'Оцінка активності',
          description: 'Profile: activity',
        })}
      >
        {{ content: <div>Оцінка активності</div> }}
      </Accordion>
      <Accordion
        title={formatMessage({
          defaultMessage: 'Листування',
          description: 'Profile: messages',
        })}
      >
        {{ content: <div>Листування</div> }}
      </Accordion>
    </>
  );
};
