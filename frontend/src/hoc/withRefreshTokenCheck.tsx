import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { axiosPrivate } from '../api/axios';
import useAxiosRefreshToken from '../hooks/useAxiosRefreshToken';
import { authActions } from '../store';

// FIXME: пофіксить тайпінги і все що нижче під ts-ignore
/* eslint-disable */
const WithRefreshTokenCheck = (WrappedComponent: FC) =>
  function comp(props: JSX.IntrinsicAttributes) {
    const dispatch = useDispatch();
    const refresh = useAxiosRefreshToken();

    // @ts-ignore
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
        // @ts-ignore
        const authToken = JSON.parse(localStorage.getItem('authToken'));

        // @ts-ignore
        if (!config.headers['Authorization'] && authToken) {
          // @ts-ignore
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
            // @ts-ignore
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
