import { AxiosResponse } from 'axios';
import {
  IAuthCredentials,
  IAuthResponse,
} from '../../models/authModel/authModel';
import { IUser } from '../../models/userModel/userModel';
import axios, { axiosPrivate } from '../axios';

class AuthorizationAPI {
  signUp = async (
    credentials: IAuthCredentials,
  ): Promise<AxiosResponse<IUser>> => {
    const response = await axios.post(`/api/v1/auth/sign-up`, credentials);
    return response;
  };

  signIn = async (
    credentials: IAuthCredentials,
  ): Promise<AxiosResponse<IAuthResponse>> => {
    const response = await axios.post(`/api/v1/auth/sign-in`, credentials);
    return response;
  };

  signOut = async (refreshToken: string): Promise<void> => {
    await axios.delete(`/api/v1/auth/sign-out`, {
      data: refreshToken,
    });
  };

  //! remove, just for test auth & headers with token
  exampleRequest = async () => {
    const response = await axiosPrivate.get(`/api/v1/involvements/types`);
    return response;
  };
}

const authorizationAPI = new AuthorizationAPI();
export default authorizationAPI;
