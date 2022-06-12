import authorizationAPI from 'api/Auth/Auth';
import { AxiosResponse } from 'axios';

import { IAuthResponse } from './../models/authModel/authModel';

const useAxiosRefreshToken = () => {
  const refresh = async (): Promise<AxiosResponse<IAuthResponse>> => {
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
    const response = await authorizationAPI.refreshAuthToken(refreshToken.token);

    localStorage.setItem('authToken', JSON.stringify(response.data.tokens.access));
    localStorage.setItem('refreshToken', JSON.stringify(response.data.tokens.refresh));

    return response.data.tokens.access.token;
  };

  return refresh;
};

export default useAxiosRefreshToken;
