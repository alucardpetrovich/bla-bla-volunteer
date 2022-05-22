import { useEffect, useLayoutEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import authActions from '../redux/auth/authActions';

const WithRefreshTokenCheck = (WrappedComponent: FC) =>
  function comp(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const expireAt = JSON.parse(
      localStorage.getItem('refreshToken'),
    )?.expiresAt;
    const today = Math.round(Date.now() / 1000);

    const notAuthNavigate = () => navigate('/ua/login', { replace: true });

    useLayoutEffect(() => {
      if (expireAt < today || !expireAt) {
        dispatch(authActions.logoutSuccess());
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
      }
    }, []);

    useEffect(() => {
      notAuthNavigate();
    }, []);

    return <WrappedComponent {...props} />;
  };

export default WithRefreshTokenCheck;
