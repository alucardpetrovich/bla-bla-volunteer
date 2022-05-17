import { IUser } from '../userModel/userModel';

export interface IAuthCredentials {
  email: string;
  password: string;
}

export interface IAuthResponse {
  tokens: IAuthTokens;
  user?: IUser;
}

export interface IAuthTokens {
  access: IAuthAccessRefresh;
  refresh: IAuthAccessRefresh;
}

export interface IAuthAccessRefresh {
  token: string;
  expiresAt: number;
}
