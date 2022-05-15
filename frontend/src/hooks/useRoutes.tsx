import { useRoutes } from 'react-router';
import { Navigate, generatePath } from 'react-router-dom';
import { PATHS } from '../constants/PATH';

import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import RegistrationPage from '../pages/Registration';
import DonarPage from '../pages/Donar';
import HubPage from '../pages/Hub';
import DriverPage from '../pages/Driver';
import ProfilePage from '../pages/Profile';
import NotFoundPage from '../pages/NotFound404';

const RedirectToHome = ({ lang }) => (
  <Navigate to={generatePath(PATHS.HOME.path, { lang })} replace />
);

const useRoutesConstants = () => {
  const lang = 'ua';
  const token = 'fdfsd3423sdfdf';

  const routes = useRoutes([
    {
      path: PATHS.DEFAULT,
      element: <RedirectToHome lang={lang} />,
    },

    {
      path: PATHS.HOME.path,
      element: <HomePage />,
    },

    {
      path: PATHS.LOGIN.path,
      element: token ? <LoginPage /> : <RedirectToHome lang={lang} />,
    },

    {
      path: PATHS.REGISTRATION.path,
      element: token ? <RegistrationPage /> : <RedirectToHome lang={lang} />,
    },

    {
      path: PATHS.DONAR.path,
      element: token ? <DonarPage /> : <RedirectToHome lang={lang} />,
    },

    {
      path: PATHS.HUB.path,
      element: token ? <HubPage /> : <RedirectToHome lang={lang} />,
    },

    {
      path: PATHS.DRIVER.path,
      element: token ? <DriverPage /> : <RedirectToHome lang={lang} />,
    },

    {
      path: PATHS.PROFILE.path,
      element: token ? <ProfilePage /> : <RedirectToHome lang={lang} />,
    },

    {
      path: PATHS.NOT_FOUND_404.path,
      element: <NotFoundPage />,
    },
  ]);

  return routes;
};

export default useRoutesConstants;
