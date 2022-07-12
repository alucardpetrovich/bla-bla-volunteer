import { IUser } from '../../models/userModel/userModel';
import { isErrorResponse } from '../../utils/typeguard/error';
import authActionTypes from './authActionTypes';

const registrationRequest = () => ({
  type: authActionTypes.REGISTER_REQUEST,
});

const registrationSuccess = (user: IUser) => ({
  type: authActionTypes.REGISTER_SUCCESS,
  payload: user,
});

const registrationError = (error: unknown) => {
  const errorMessage = isErrorResponse(error) ? error.response.data.message : 'registration error';

  return {
    type: authActionTypes.REGISTER_ERROR,
    payload: errorMessage,
  };
};

const loginRequest = () => ({
  type: authActionTypes.LOGIN_REQUEST,
});

const loginSuccess = (user: IUser | undefined) => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: { user },
});

const loginError = (error: unknown) => {
  const errorMessage = isErrorResponse(error) ? error.response.data.message : 'Login error';

  return {
    type: authActionTypes.LOGIN_ERROR,
    payload: errorMessage,
  };
};

const logoutRequest = () => ({
  type: authActionTypes.LOGOUT_REQUEST,
});

const logoutSuccess = () => ({
  type: authActionTypes.LOGOUT_SUCCESS,
});

const logoutError = (error: unknown) => {
  const errorMessage = isErrorResponse(error) ? error.response.data.message : 'logout error';
  return {
    type: authActionTypes.LOGOUT_ERROR,
    payload: errorMessage,
  };
};

const refreshRequest = () => ({
  type: authActionTypes.REFRESH_REQUEST,
});

const refreshSuccess = () => ({
  type: authActionTypes.REFRESH_SUCCESS,
});

const refreshError = () => ({
  type: authActionTypes.REFRESH_ERROR,
});

const sendResetPasswordLinkRequest = () => ({
  type: authActionTypes.SEND_RESET_PASSWORD_LINK_REQUEST,
});

const sendResetPasswordLinkSuccess = () => ({
  type: authActionTypes.SEND_RESET_PASSWORD_LINK_SUCCESS,
});

const sendResetPasswordLinkError = (error: unknown) => {
  const errorMessage = isErrorResponse(error) ? error.response.data.message : 'send reset password link error';

  return {
    type: authActionTypes.SEND_RESET_PASSWORD_LINK_ERROR,
    payload: errorMessage,
  };
};

const resetPasswordRequest = () => ({
  type: authActionTypes.RESET_PASSWORD_REQUEST,
});

const resetPasswordSuccess = () => ({
  type: authActionTypes.RESET_PASSWORD_SUCCESS,
});

const resetPasswordError = (error: unknown) => {
  const errorMessage = isErrorResponse(error) ? error.response.data.message : 'reset password error';

  return {
    type: authActionTypes.RESET_PASSWORD_ERROR,
    payload: errorMessage,
  };
};

const authActions = {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  refreshRequest,
  refreshSuccess,
  refreshError,
  sendResetPasswordLinkError,
  sendResetPasswordLinkRequest,
  sendResetPasswordLinkSuccess,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordError,
};

export default authActions;
