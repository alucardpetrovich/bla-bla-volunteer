import Axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import { StorageKeys } from '../constants/storageKeys';
import { getFromStorage, setToStorage } from './storage';

interface Token {
  token: string;
  expiresAt: number;
}

const axios = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axios.interceptors.request.use(
  config => {
    const authToken = getFromStorage<Token>(StorageKeys.authToken);

    if (!authToken) {
      return config;
    }

    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${authToken.token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

const refreshAuthLogic: Parameters<typeof createAuthRefreshInterceptor>[1] = failedRequest => {
  const refreshToken = getFromStorage<Token>(StorageKeys.refreshToken);

  return axios
    .post('/v1/auth/refresh', { refreshToken: refreshToken?.token })
    .then(response => {
      setToStorage(StorageKeys.refreshToken, response.data.tokens.refresh);
      setToStorage(StorageKeys.authToken, response.data.tokens.access);
      failedRequest.response.config.headers['Authorization'] = 'Bearer ' + response.data.tokens.access.token;
      return Promise.resolve();
    })
    .catch(err => {
      console.error('❌ AccessToken refresh error: ', err);
      return Promise.reject(err);
    });
};

createAuthRefreshInterceptor(axios, refreshAuthLogic, {
  pauseInstanceWhileRefreshing: true,
});

const l = process.env.REACT_APP_DEFAULT_LOCALE || 'uk';

export const withLanguageHeaders = () => {
  const locale = getFromStorage(StorageKeys.locale) || l;

  return {
    'Accept-Language': locale,
  };
};

export default axios;
