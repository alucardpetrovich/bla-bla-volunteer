import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useGetURL } from 'src/hooks/useGetURL';

const RedirectToHome: FC<{ replace?: boolean }> = ({ replace = true }) => {
  const { getHomeURL } = useGetURL();

  return <Navigate to={getHomeURL()} replace={replace} />;
};

export default RedirectToHome;
