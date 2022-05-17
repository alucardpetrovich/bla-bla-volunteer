import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import authActions from '../redux/auth/authActions';

const WithRefreshTokenCheck = (WrappedComponent: React.FC) =>
  function Comp(props: any) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const expireAt = JSON.parse(
      localStorage.getItem('refreshToken'),
    )?.expiresAt;
    const today = Math.round(Date.now() / 1000);

    const notAuthNavigate = () => navigate('/login', { replace: true });

    useEffect(() => {
      if (expireAt < today || !expireAt) {
        dispatch(authActions.logoutSuccess());
        notAuthNavigate();
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

export default WithRefreshTokenCheck;
