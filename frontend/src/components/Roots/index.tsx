import { FC } from 'react';
import useRoutesConstants from '../../hooks/useRoutes';

const Roots: FC = () => {
  const routes = useRoutesConstants();
  return routes;
};

export default Roots;
