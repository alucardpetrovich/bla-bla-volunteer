import { useRoutes } from 'react-router';
import { useSelector } from 'react-redux';
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

const RedirectToHome = () => {
  const lang = useSelector(state => 'ua');

  return <Navigate to={generatePath(PATHS.HOME.path, { lang })} replace />;
};

const useRoutesConstants = () => {
  const token = useSelector(state => 'fdfsd3423sdfdf');

  const routes = useRoutes([
    {
      path: PATHS.DEFAULT,
      element: <RedirectToHome />,
    },

    {
      path: PATHS.HOME.path,
      element: <HomePage />,
    },

    {
      path: PATHS.LOGIN.path,
      element: token ? <LoginPage /> : <RedirectToHome />,
    },

    {
      path: PATHS.REGISTRATION.path,
      element: token ? <RegistrationPage /> : <RedirectToHome />,
    },

    {
      path: PATHS.DONAR.path,
      element: token ? <DonarPage /> : <RedirectToHome />,
    },

    {
      path: PATHS.HUB.path,
      element: token ? <HubPage /> : <RedirectToHome />,
    },

    {
      path: PATHS.DRIVER.path,
      element: token ? <DriverPage /> : <RedirectToHome />,
    },

    {
      path: PATHS.PROFILE.path,
      element: token ? <ProfilePage /> : <RedirectToHome />,
    },

    {
      path: PATHS.NOT_FOUND_404.path,
      element: <NotFoundPage />,
    },
  ]);

  return routes;
};

export default useRoutesConstants;
