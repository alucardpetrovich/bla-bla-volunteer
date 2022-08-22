import { CircularProgress } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

import list from '../../locale/list.json';
import { ACCOUNT_PATH } from '../common/constants/PATH';
import { StorageKeys } from '../common/constants/storageKeys';
import { useCurrentUserInfoQuery } from '../common/hooks/useCurrentUserInfoQuery';
import { useLocale } from '../common/hooks/useLocale';
import { setToStorage } from '../common/utils/storage';
import { AccountLayout } from './AccountLayout/AccountLayout';
import { CabinetLayout } from './CabinetLayout/CabinetLayout';
import { Footer } from './Footer/Footer';
import { SpinnerWrapper, Wrapper } from './Layout.styles';
import { MainLayout } from './MainLayout/MainLayout';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <CircularProgress />
    </SpinnerWrapper>
  );
};

interface LayoutContentProps {
  children: ReactNode;
}

const LayoutContent: FC<LayoutContentProps> = ({ children }) => {
  const { pathname } = useLocation();
  const { data, isFetched } = useCurrentUserInfoQuery();

  const shouldRenderCabinetLayout = data && data?.hasUserRole;
  const shouldRenderAccountLayout = pathname.includes(ACCOUNT_PATH);

  if (!isFetched) {
    return <Spinner />;
  }

  if (shouldRenderAccountLayout) {
    return <AccountLayout>{children}</AccountLayout>;
  }

  if (shouldRenderCabinetLayout) {
    return <CabinetLayout>{children}</CabinetLayout>;
  }

  return <MainLayout>{children}</MainLayout>;
};

type MessageKey = keyof typeof list;

const isMessagesListKey = (value: unknown): value is MessageKey => {
  return typeof value === 'string' && value in list;
};

export const Layout: FC = () => {
  const { locale } = useLocale();
  const listKey = isMessagesListKey(locale) ? locale : 'uk';
  const messages = list[listKey];

  useEffectOnce(() => {
    setToStorage(StorageKeys.locale, locale);
  });

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale={process.env.REACT_APP_DEFAULT_LOCALE}>
      <Wrapper>
        <LayoutContent>
          <Outlet />
        </LayoutContent>
        <Footer />
      </Wrapper>
    </IntlProvider>
  );
};
