import authorizationAPI from '../../api/Auth/Auth';
import { IAuthCredentials } from '../../models/authModel/authModel';
import { AppDispatch } from '../store';
import authActions from './authActions';

export const userRegistration = (credentials: IAuthCredentials) => async (dispatch: AppDispatch) => {
  dispatch(authActions.registrationRequest());
  try {
    const response = await authorizationAPI.signUp(credentials);

    dispatch(authActions.registrationSuccess(response.data));
  } catch (error) {
    console.log(error);

    dispatch(authActions.registrationError(error));
  }
};

export const userLogin = (credentials: IAuthCredentials) => async (dispatch: AppDispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await authorizationAPI.signIn(credentials);
    dispatch(authActions.loginSuccess(response.data.user));

    localStorage.setItem('authToken', JSON.stringify(response.data.tokens.access));
    localStorage.setItem('refreshToken', JSON.stringify(response.data.tokens.refresh));
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};

export const userLogOut = (refreshToken: string | undefined) => async (dispatch: AppDispatch) => {
  dispatch(authActions.logoutRequest());

  if (!refreshToken) {
    throw new Error('Does not get refreshToken from storage');
  }

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

export const refreshAuthToken = (refreshToken: string) => async (dispatch: AppDispatch) => {
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
