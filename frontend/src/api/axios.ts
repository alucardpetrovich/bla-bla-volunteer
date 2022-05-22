import axios from 'axios';

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

axiosPrivate.interceptors.request.use(
  config => {
    const authToken = JSON.parse(localStorage.getItem('authToken'));

    if (!config.headers['Authorization'] && authToken) {
      config.headers['Authorization'] = `Bearer ${authToken.token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);
