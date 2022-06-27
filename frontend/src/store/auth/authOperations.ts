import authorizationAPI from '../../api/Auth/Auth';
import { IAuthCredentials } from './../../models/authModel/authModel';
import authActions from './authActions';

// Need to fix
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const userRegistration = (credentials: IAuthCredentials) => async dispatch => {
  dispatch(authActions.registrationRequest());
  try {
    const response = await authorizationAPI.signUp(credentials);

    dispatch(authActions.registrationSuccess(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    dispatch(authActions.registrationError(error));
  }
};

// Need to fix
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const userLogin = (credentials: IAuthCredentials) => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await authorizationAPI.signIn(credentials);
    dispatch(authActions.loginSuccess(response.data.user));

    localStorage.setItem('authToken', JSON.stringify(response.data.tokens.access));
    localStorage.setItem('refreshToken', JSON.stringify(response.data.tokens.refresh));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    dispatch(authActions.loginError(error));
  }
};

// FIXME: пофіксить тайпінги
// eslint-disable-next-line
// @ts-ignore
export const userLogOut = (refreshToken: string) => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await authorizationAPI.signOut(refreshToken);
    dispatch(authActions.logoutSuccess());

    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    dispatch(authActions.logoutError());
  }
};

// FIXME: пофіксить тайпінги
// eslint-disable-next-line
// @ts-ignore
export const refreshAuthToken = (refreshToken: string) => async dispatch => {
  dispatch(authActions.refreshRequest());
  try {
    const response = await authorizationAPI.refreshAuthToken(refreshToken);
    dispatch(authActions.refreshSuccess());

    localStorage.setItem('authToken', JSON.stringify(response.data.tokens.access));
    localStorage.setItem('refreshToken', JSON.stringify(response.data.tokens.refresh));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    dispatch(authActions.refreshError());
  }
};
