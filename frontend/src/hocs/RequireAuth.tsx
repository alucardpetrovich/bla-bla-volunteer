import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const location = useLocation();

  //@ts-ignore
  const auth = useSelector(state => state.auth.auth);

  if (!auth) {
    return <Navigate to="auth/login" state={{ from: location }} />;
  }
  return <Outlet />;
};

export default RequireAuth;
