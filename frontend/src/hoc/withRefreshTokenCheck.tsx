import { FC, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import { axiosPrivate } from '../api/axios';
import { StorageKeys } from '../constants/storageKeys';
import { useAppDispatch } from '../hooks';
import useAxiosRefreshToken from '../hooks/useAxiosRefreshToken';
import { IAuthAccessRefresh } from '../models/authModel/authModel';
import { authActions } from '../store';
import { isErrorResponse } from '../utils/typeguard/error';

const WithRefreshTokenCheck = (WrappedComponent: FC) => {
  const Comp: FC = props => {
    const dispatch = useAppDispatch();
    const refresh = useAxiosRefreshToken();
    const [refreshToken, , removeRefreshToken] = useLocalStorage<IAuthAccessRefresh>(StorageKeys.refreshToken);
    const [authToken, , removeAuthToken] = useLocalStorage<IAuthAccessRefresh>(StorageKeys.authToken);

    const expireAt = refreshToken?.expiresAt ?? 0;
    const today = Math.round(Date.now() / 1000);

    const logout = () => {
      dispatch(authActions.logoutSuccess());
      removeRefreshToken();
      removeAuthToken();
    };

    useEffect(() => {
      if (expireAt < today || !expireAt) {
        logout();
      }
    }, []);

    const axiosInterceptorRequest = axiosPrivate.interceptors.request.use(
      config => {
        if (config.headers && !config.headers['Authorization'] && authToken) {
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
            if ((isErrorResponse(error) && error.response.data.statusCode === 403) || !expireAt) {
              logout();
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
  return Comp;
};

export default WithRefreshTokenCheck;
