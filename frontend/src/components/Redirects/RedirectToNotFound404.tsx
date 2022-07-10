import { Navigate } from 'react-router';
import { useGetURL } from 'src/hooks/useGetURL';

const RedirectToNotFound404 = () => {
  const { getNotFound404URL } = useGetURL();

  return <Navigate to={getNotFound404URL()} replace />;
};

export default RedirectToNotFound404;
