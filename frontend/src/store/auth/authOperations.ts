import { AnyAction, Dispatch } from 'redux';

import authorizationAPI from '../../api/Auth/Auth';
import { IAuthCredentials } from './../../models/authModel/authModel';
import authActions from './authActions';

export const userRegistration = (credentials: IAuthCredentials) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(authActions.registrationRequest());
  try {
    const response = await authorizationAPI.signUp(credentials);

    dispatch(authActions.registrationSuccess(response.data));
  } catch (error) {
    console.log(error);

    dispatch(authActions.registrationError(error));
  }
};

export const userLogin = (credentials: IAuthCredentials) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await authorizationAPI.signIn(credentials);
    dispatch(authActions.loginSuccess(response.data.user));

    localStorage.setItem('authToken', JSON.stringify(response.data.tokens.access));
    localStorage.setItem('refreshToken', JSON.stringify(response.data.tokens.refresh));
  } catch (error) {
    console.log(error);
    dispatch(authActions.loginError(error));
  }
};

export const userLogOut = (refreshToken: string) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(authActions.logoutRequest());
  try {
    await authorizationAPI.signOut(refreshToken);
    dispatch(authActions.logoutSuccess());

    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  } catch (error) {
    console.log(error);
    dispatch(authActions.logoutError());
  }
};

export const refreshAuthToken = (refreshToken: string) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(authActions.refreshRequest());
  try {
    const response = await authorizationAPI.refreshAuthToken(refreshToken);
    dispatch(authActions.refreshSuccess());

    localStorage.setItem('authToken', JSON.stringify(response.data.tokens.access));
    localStorage.setItem('refreshToken', JSON.stringify(response.data.tokens.refresh));
  } catch (error) {
    console.log(error);
    dispatch(authActions.refreshError());
  }
};
