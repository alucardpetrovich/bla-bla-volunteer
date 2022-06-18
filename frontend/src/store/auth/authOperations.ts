import authorizationAPI from '../../api/Auth/Auth';
import authActions from './authActions';

// FIXME: пофіксить тайпінги
// eslint-disable-next-line
// @ts-ignore
export const userRegistration = credentials => async dispatch => {
  dispatch(authActions.registrationRequest());
  try {
    const response = await authorizationAPI.signUp(credentials);

    dispatch(authActions.registrationSuccess(response.data));
  } catch (error) {
    console.log(error);
    // FIXME: пофіксить тайпінги
    // eslint-disable-next-line
    // @ts-ignore
    dispatch(authActions.registrationError(error.message));
  }
};

// FIXME: пофіксить тайпінги
// eslint-disable-next-line
// @ts-ignore
export const userLogin = credentials => async dispatch => {
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

// FIXME: пофіксить тайпінги
// eslint-disable-next-line
// @ts-ignore
export const userLogOut = refreshToken => async dispatch => {
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

// FIXME: пофіксить тайпінги
// eslint-disable-next-line
// @ts-ignore
export const refreshAuthToken = refreshToken => async dispatch => {
  dispatch(authActions.refreshRequest());
  try {
    const response = await authorizationAPI.refreshAuthToken(refreshToken);
    dispatch(authActions.refreshSuccess());

    localStorage.setItem('authToken', JSON.stringify(response.data.tokens.access));
    localStorage.setItem('refreshToken', JSON.stringify(response.data.tokens.refresh));
  } catch (error) {
    dispatch(authActions.refreshError());
  }
};
