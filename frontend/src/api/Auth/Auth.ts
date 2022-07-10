import { AxiosResponse } from 'axios';

import { IAuthCredentials, IAuthResponse } from '../../models/authModel/authModel';
import { IUser } from '../../models/userModel/userModel';
import axios, { axiosPrivate } from '../axios';

const signUp = async (credentials: IAuthCredentials): Promise<AxiosResponse<IUser>> => {
  const response = await axios.post('/v1/auth/sign-up', credentials);
  return response;
};

const signIn = async (credentials: IAuthCredentials): Promise<AxiosResponse<IAuthResponse>> => {
  const response = await axios.post('/v1/auth/sign-in', credentials);
  return response;
};

const signOut = async (refreshToken: { refreshToken: string }): Promise<void> => {
  await axios.delete('/v1/auth/sign-out', {
    data: refreshToken,
  });
};

const refreshAuthToken = async (
  refreshToken: string | undefined,
): Promise<AxiosResponse<Pick<IAuthResponse, 'tokens'>>> => {
  const response = axios.post('/v1/auth/refresh', {
    refreshToken: refreshToken,
  });
  return response;
};

//! remove, just for test auth & headers with token
const exampleRequest = async () => {
  const response = await axiosPrivate.get('/v1/involvements/types');
  return response;
};

const authorizationAPI = {
  signUp,
  signIn,
  signOut,
  refreshAuthToken,
  exampleRequest,
};

export default authorizationAPI;
