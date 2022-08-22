import React, { FC } from 'react';

import HomePage from '../../../../pages/Home';
import { ACCOUNT_PATH, PATHS } from '../../constants/PATH';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { Redirect } from '../Redirect/Redirect';

const RedirectToHome = () => <Redirect pathname={PATHS.HOME} />;
const RedirectToProfile = () => <Redirect pathname={PATHS.PROFILE} />;

interface PageProps {
  children: React.ReactNode;
  pathname: string;
}

const useUserInfo = (pathname?: PageProps['pathname']) => {
  const data = useCurrentUser();
  const isAccountPath = pathname?.includes(ACCOUNT_PATH);
  const shouldRenderAccountPage = !data && isAccountPath;
  const shouldRenderCabinetPage = data && data.hasUserRole;

  const shouldRenderProfilePage = data && isAccountPath;
  const shouldRedirectToProfile = data && !data.hasUserRole;

  return { data, shouldRenderAccountPage, shouldRenderProfilePage, shouldRenderCabinetPage, shouldRedirectToProfile };
};

export const Account: FC<PageProps> = ({ children, pathname }) => {
  const { shouldRenderAccountPage } = useUserInfo(pathname);
  return shouldRenderAccountPage ? <>{children}</> : <RedirectToHome />;
};

export const Profile: FC<PageProps> = ({ children, pathname }) => {
  const { shouldRenderProfilePage } = useUserInfo(pathname);
  return shouldRenderProfilePage ? <>{children}</> : <RedirectToHome />;
};

export const Home: FC = () => {
  const { shouldRedirectToProfile } = useUserInfo();

  if (shouldRedirectToProfile) {
    return <RedirectToProfile />;
  }

  return <HomePage />;
};

export const AuthGuard: FC<Omit<PageProps, 'pathname'>> = ({ children }) => {
  const data = useCurrentUser();

  return data?.hasUserRole ? <>{children}</> : <RedirectToHome />;
};
