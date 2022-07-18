import { IUser } from '../userModel/userModel';

export interface IAuthCredentials {
  email: string;
  password: string;
  showPassword?: boolean;
  nickName?: string;
  phoneNumber?: string;
  phoneNumberAccessMode?: string;
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

export interface IAuthResetPasswordLink {
  email: string;
  baseUrl: string;
}

export interface IAuthResetPassword {
  code: string | null;
  newPassword: string;
}
