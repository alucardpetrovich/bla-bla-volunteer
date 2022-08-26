import React from 'react';

import HubPage from '../../../pages/Hub';
import NotFoundPage from '../../../pages/NotFound404';
import { ForgotPassword } from '../../Account/Auth/ForgotPassword/ForgotPassword';
import { Login } from '../../Account/Auth/Login/Login';
import { ResetPassword } from '../../Account/Auth/ResetPassword/ResetPassword';
import { SignUp } from '../../Account/Auth/SignUp/SignUp';
import { Veirfication } from '../../Account/Auth/Veirfication/Verification';
import { VerificationConfirm } from '../../Account/Auth/VerificationConfirm/VerificationConfirm';
import { Profile as ProfilePage } from '../../Account/Profile/Profile';
import { Layout } from '../../Layout/Layout';
import { Redirect } from '../components/Redirect/Redirect';
import { Account, AuthGuard, Home, Profile } from '../components/Roots/Roots';
import { Locale, PATHS } from './PATH';

const accountList = [
  { path: PATHS.LOGIN, element: <Login /> },
  { path: PATHS.REGISTRATION, element: <SignUp /> },
  { path: PATHS.VERIFICATION, element: <Veirfication /> },
  { path: PATHS.VERIFICATION_CONFIRM, element: <VerificationConfirm /> },
  { path: PATHS.RESET_PASSWORD, element: <ResetPassword /> },
  {
    path: PATHS.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
];

const authList = [{ path: PATHS.HUB, element: <HubPage /> }];

export const Routes = [
  {
    path: '',
    element: <Redirect pathname={PATHS.HOME} />,
  },
  {
    path: Locale,
    element: <Layout />,
    children: [
      {
        path: PATHS.PROFILE,
        element: (
          <Profile pathname={PATHS.REGISTRATION}>
            <ProfilePage />
          </Profile>
        ),
      },
      ...accountList.map(item => ({
        path: item.path,
        element: <Account pathname={item.path}>{item.element}</Account>,
      })),
      ...authList.map(item => ({
        path: item.path,
        element: <AuthGuard>{item.element}</AuthGuard>,
      })),
      { path: PATHS.HOME, element: <Home /> },
      {
        path: PATHS.NOT_FOUND_404,
        element: <NotFoundPage />,
      },
      {
        path: PATHS.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
];
