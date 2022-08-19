import { Navigation } from '@ui-kit';
import React, { FC, useMemo } from 'react';
import { defineMessage } from 'react-intl';

import { useCurrentUser } from '../../common/hooks/useCurrentUser';
import LangDrawer from '../../LangDrawer';
import { Logout } from '../Logout/Logout';
import { CompanyName, NavigationBox } from './HeaderNavigation.styles';

const navsList = [
  {
    component: <LangDrawer />,
    name: defineMessage({ defaultMessage: 'Вибір мови', description: 'Header language switcher' }),
  },
];

export const HeaderNavigation: FC = () => {
  const data = useCurrentUser();

  const navs = useMemo(() => {
    if (data) {
      return [
        {
          name: defineMessage({ defaultMessage: 'вихід', description: 'Header logout button' }),
          component: <Logout />,
        },
        ...navsList,
      ];
    }

    return [
      { name: defineMessage({ defaultMessage: 'вхід', description: 'Header navigation' }), to: '/account/login' },
      ...navsList,
    ];
  }, [data]);

  return (
    <NavigationBox>
      <CompanyName>Name</CompanyName>
      <Navigation list={navs} type="primary" />
    </NavigationBox>
  );
};
