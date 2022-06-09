import { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';

import { axiosPrivate } from 'api/axios';
import useAxiosRefreshToken from 'hooks/useAxiosRefreshToken';
import authActions from '../redux/auth/authActions';

const WithRefreshTokenCheck = (WrappedComponent: FC) =>
  function comp(props) {
    const dispatch = useDispatch();
    const refresh = useAxiosRefreshToken();

    const expireAt = JSON.parse(localStorage.getItem('refreshToken'))?.expiresAt;
    const today = Math.round(Date.now() / 1000);

    useEffect(() => {
      if (expireAt < today || !expireAt) {
        dispatch(authActions.logoutSuccess());
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
      }
    }, []);

    const axiosInterceptorRequest = axiosPrivate.interceptors.request.use(
      config => {
        const authToken = JSON.parse(localStorage.getItem('authToken'));

        if (!config.headers['Authorization'] && authToken) {
          config.headers['Authorization'] = `Bearer ${authToken.token}`;
        }
        return config;
      },
      error => Promise.reject(error),
    );

    const axiosInterceptorResponse = axiosPrivate.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && error.config && !error.config._isRetry) {
          prevRequest._isRetry = true;
          try {
            const newAccessToken = await refresh();

            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

            return axiosPrivate.request(prevRequest);
          } catch (error) {
            if (error?.response?.data?.statusCode === 403 || !expireAt) {
              dispatch(authActions.logoutSuccess());
              localStorage.removeItem('authToken');
              localStorage.removeItem('refreshToken');
            }
          }
        }
        return Promise.reject(error);
      },
    );

    useEffect(() => {
      return () => {
        axiosPrivate.interceptors.response.eject(axiosInterceptorRequest);
        axiosPrivate.interceptors.response.eject(axiosInterceptorResponse);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

export default WithRefreshTokenCheck;
