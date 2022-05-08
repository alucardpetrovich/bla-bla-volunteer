import { useRoutes } from 'react-router';
import { Navigate, generatePath } from 'react-router-dom';
import { PATHS } from '../constants/PATH';
import Home from '../pages/Home';
import NotFound404 from '../pages/NotFound404';
import TestPage from '../pages/TestPage/TestPage';

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
      element: <Home />,
    },

    {
      path: PATHS.TEST.path,
      element: <TestPage />,
    },

    {
      path: PATHS.NOT_FOUND_404.path,
      element: <NotFound404 />,
    },
  ]);

  return routes;
};

export default useRoutesConstants;
