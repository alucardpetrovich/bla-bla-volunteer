import { useRoutes } from 'react-router';
import { Navigate, generatePath } from 'react-router-dom';
import { PATHS } from '../constants/PATH';
import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound404';
import TestPage from '../pages/TestPage';

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
      path: PATHS.HOME.path,
      element: <HomePage />,
    },

    {
      path: PATHS.TEST.path,
      element: <TestPage />,
    },

    {
      path: PATHS.NOT_FOUND_404.path,
      element: <NotFoundPage />,
    },
  ]);

  return routes;
};

export default useRoutesConstants;
