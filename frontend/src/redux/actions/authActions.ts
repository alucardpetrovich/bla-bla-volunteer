import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
} from './../actionTypes/authActionTypes';

export const loginSuccess = (isAuth: boolean) => ({
  type: LOGIN_REQUEST,
  payload: isAuth,
});

export const logoutSuccess = (isAuth: boolean) => ({
  type: LOGOUT_REQUEST,
  payload: isAuth,
});
