import { useLocalStorage } from 'react-use';

import authorizationAPI from '../api/Auth/Auth';
import { StorageKeys } from '../constants/storageKeys';
import { IAuthAccessRefresh } from '../models/authModel/authModel';

const useAxiosRefreshToken = () => {
  const [refreshToken, setRefreshToken] = useLocalStorage<IAuthAccessRefresh>(StorageKeys.refreshToken);
  const [, setAuthToken] = useLocalStorage<IAuthAccessRefresh>(StorageKeys.authToken);

  return async () => {
    const response = await authorizationAPI.refreshAuthToken(refreshToken?.token);

    localStorage.setItem(StorageKeys.authToken, JSON.stringify(response.data.tokens.access));

    setAuthToken(response.data.tokens.access);
    setRefreshToken(response.data.tokens.refresh);

    return response.data.tokens.access.token;
  };
};

export default useAxiosRefreshToken;
