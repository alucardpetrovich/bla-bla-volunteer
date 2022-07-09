import { AxiosResponse } from 'axios';

import {
  IAuthCredentials,
  IAuthResetPassword,
  IAuthResetPasswordLink,
  IAuthResponse,
} from '../../models/authModel/authModel';
import { IUser } from '../../models/userModel/userModel';
import axios, { axiosPrivate } from '../axios';

const signUp = async (credentials: IAuthCredentials): Promise<AxiosResponse<IUser>> => {
  const response = await axios.post('/auth/sign-up', credentials);
  return response;
};

const signIn = async (credentials: IAuthCredentials): Promise<AxiosResponse<IAuthResponse>> => {
  const response = await axios.post('/auth/sign-in', credentials);
  return response;
};

const signOut = async (refreshToken: { refreshToken: string }): Promise<void> => {
  await axios.delete('/auth/sign-out', {
    data: refreshToken,
  });
};

const sendResetPasswordLink = async (payload: IAuthResetPasswordLink): Promise<void> => {
  await axios.patch('/auth/send-reset-password-link', payload);
};

const resetPassword = async (payload: IAuthResetPassword): Promise<void> => {
  await axios.patch('/auth/reset-password', payload);
};

const refreshAuthToken = async (
  refreshToken: string | undefined,
): Promise<AxiosResponse<Pick<IAuthResponse, 'tokens'>>> => {
  const response = axios.post('/auth/refresh', {
    refreshToken: refreshToken,
  });
  return response;
};

//! remove, just for test auth & headers with token
const exampleRequest = async () => {
  const response = await axiosPrivate.get('/involvements/types');
  return response;
};

const authorizationAPI = {
  signUp,
  signIn,
  signOut,
  refreshAuthToken,
  sendResetPasswordLink,
  exampleRequest,
  resetPassword,
};

export default authorizationAPI;
