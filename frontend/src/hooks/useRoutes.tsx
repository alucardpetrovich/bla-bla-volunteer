import { useRoutes } from 'react-router';
import { useSelector } from 'react-redux';
import { Navigate, generatePath } from 'react-router-dom';
import { PATHS } from 'constants/PATH';
import { getIsAuth } from 'redux/auth/authSelectors';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import RegistrationPage from 'pages/Registration';
import DonarPage from 'pages/Donar';
import HubPage from 'pages/Hub';
import DriverPage from 'pages/Driver';
import ProfilePage from 'pages/Profile';
import NotFoundPage from 'pages/NotFound404';

const RedirectToHome = () => {
  const lang = useSelector(state => 'ua');
  const path = `/${generatePath(PATHS.HOME.path, { lang })}`;

  return <Navigate to={path} replace />;
};

const useRoutesConstants = () => {
  const isAuth = useSelector(getIsAuth);

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
