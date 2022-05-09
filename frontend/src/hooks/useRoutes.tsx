import { useRoutes } from 'react-router';
import { Navigate, generatePath } from 'react-router-dom';
import { PATHS } from '../constants/PATH';
import Auth from '../components/modules/Auth/Auth';
import Home from '../pages/Home';
import NotFound404 from '../pages/NotFound404';
import TestPage from '../pages/TestPage/TestPage';
import Login from '../components/modules/Auth/Components/Login/Login';
import Registration from '../components/modules/Auth/Components/Registration/Registration';
import RequireAuth from '../hocs/RequireAuth';

const useRoutesConstants = () => {
  const lang = 'ua';

  const routes = useRoutes([
    {
      path: PATHS.DEFAULT,
      element: (
        <Navigate to={generatePath(PATHS.HOME.path, { lang })} replace />
      ),
    },

    {
      path: PATHS.AUTH.path,
      element: <Auth />,
      children: [
        {
          path: PATHS.LOGIN.path,
          element: <Login />,
        },
        {
          path: PATHS.REGISTER.path,
          element: <Registration />,
        },
      ],
    },

    {
      element: <RequireAuth />,
      children: [
        {
          path: PATHS.HOME.path,
          element: <Home />,
        },
        {
          path: PATHS.TEST.path,
          element: <TestPage />,
        },
      ],
    },

    {
      path: PATHS.NOT_FOUND_404.path,
      element: <NotFound404 />,
    },
  ]);

  return routes;
};

export default useRoutesConstants;
