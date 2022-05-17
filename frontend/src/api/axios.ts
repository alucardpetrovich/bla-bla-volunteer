import axios, { AxiosResponse } from 'axios';
import { IAuthResponse } from '../models/authModel/authModel';

const BASE_URL = 'http://68.183.216.91';

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refresh = async (): Promise<AxiosResponse<IAuthResponse>> => {
  const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
  const response = await axios.post(`${BASE_URL}/api/v1/auth/refresh`, {
    refreshToken: refreshToken.token,
  });

  localStorage.setItem(
    'authToken',
    JSON.stringify(response.data.tokens.access),
  );
  localStorage.setItem(
    'refreshToken',
    JSON.stringify(response.data.tokens.refresh),
  );

  return response.data.tokens.access.token;
};

axiosPrivate.interceptors.request.use(
  config => {
    const authToken = JSON.parse(localStorage.getItem('authToken'));

    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `Bearer ${authToken.token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

axiosPrivate.interceptors.response.use(
  response => response,
  async error => {
    const prevRequest = error?.config;

    if (
      error?.response?.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      prevRequest._isRetry = true;
      try {
        const newAccessToken = await refresh();

        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return axiosPrivate.request(prevRequest);
      } catch (error) {
        console.log('you are not logged in');
      }
    }
    return Promise.reject(error);
  },
);
