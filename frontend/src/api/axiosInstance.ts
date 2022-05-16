import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://68.183.216.91',
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  //TODO add logic for refresh token
  return config;
});

export default axiosInstance;
