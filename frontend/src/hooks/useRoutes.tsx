import { useRoutes } from 'react-router';
import RedirectToHome from 'src/components/Redirects/RedirectToHome';
import { PATHS } from 'src/constants/PATH';
import DonarPage from 'src/pages/Donar';
import DriverPage from 'src/pages/Driver';
import ForgotPasswordPage from 'src/pages/ForgotPassword';
import HomePage from 'src/pages/Home';
import HubPage from 'src/pages/Hub';
import LoginPage from 'src/pages/Login';
import NotFoundPage from 'src/pages/NotFound404';
import ProfilePage from 'src/pages/Profile';
import RegistrationPage from 'src/pages/Registration';
import ResetPassword from 'src/pages/ResetPassword';
import RolesPage from 'src/pages/Roles';
import VerificationPage from 'src/pages/Verification';
import { getIsAuth } from 'src/store';

import { useAppSelector } from './useStore';

const useRoutesConstants = () => {
  const isAuth = useAppSelector(getIsAuth);

  const routes = useRoutes([
    {
      path: PATHS.DEFAULT,
      element: <RedirectToHome />,
    },

    {
      path: PATHS.HOME.path,
      element: <HomePage />,
    },

    /* LOGIN ONLY_PUBLIC */
    {
      path: PATHS.LOGIN.path,
      element: !isAuth ? <LoginPage /> : <RedirectToHome />,
    },

    /* REGISTRATION ONLY_PUBLIC */
    {
      path: PATHS.REGISTRATION.path,
      element: !isAuth ? <RegistrationPage /> : <RedirectToHome />,
    },

    // /* VERIFICATION ONLY_PUBLIC - вопрос а публичная ли только?? */
    // {
    //   path: PATHS.VERIFICATION.path,
    //   element: !isAuth ? <VerificationPage /> : <RedirectToHome />,
    // },
    /* УЗНАТЬ ПРИВАТНЫЙ ОН ИЛИ ПУБЛИЧНЫЙ ??? */
    {
      path: PATHS.VERIFICATION.path,
      element: <VerificationPage />,
    },

    /* УЗНАТЬ ПРИВАТНЫЙ ОН ИЛИ ПУБЛИЧНЫЙ ??? */
    {
      path: PATHS.RESET_PASSWORD.path,
      element: <ResetPassword />,
    },

    /* FORGOT_PASSWORD ONLY_PUBLIC */
    {
      path: PATHS.FORGOT_PASSWORD.path,
      element: !isAuth ? <ForgotPasswordPage /> : <RedirectToHome />,
    },

    /* ROLES PRIVAT */
    {
      path: PATHS.ROLES.path,
      element: isAuth ? <RolesPage /> : <RedirectToHome />,
    },

    /* DONAR PRIVAT */
    {
      path: PATHS.DONAR.path,
      element: isAuth ? <DonarPage /> : <RedirectToHome />,
    },

    /* HUB PRIVAT */
    {
      path: PATHS.HUB.path,
      element: isAuth ? <HubPage /> : <RedirectToHome />,
    },

    /* DRIVER PRIVAT */
    {
      path: PATHS.DRIVER.path,
      element: isAuth ? <DriverPage /> : <RedirectToHome />,
    },

    /* PROFILE PRIVAT */
    {
      path: PATHS.PROFILE.path,
      element: isAuth ? <ProfilePage /> : <RedirectToHome />,
    },

    {
      path: PATHS.NOT_FOUND_404.path,
      element: <NotFoundPage />,
    },
  ]);

  return routes;
};

export default useRoutesConstants;
