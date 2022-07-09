import { FC } from 'react';
import useRoutesConstants from 'src/hooks/useRoutes';

const Roots: FC = () => {
  const routes = useRoutesConstants();
  return <main>{routes}</main>;
};

export default Roots;
