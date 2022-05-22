import authorizationAPI from '../../api/Auth/Auth';
import authActions from './authActions';

export const userRegistration = credentials => async (dispatch: any) => {
  dispatch(authActions.registrationRequest());
  try {
    const response = await authorizationAPI.signUp(credentials);

    dispatch(authActions.registrationSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(authActions.registrationError(error.message));
  }
};

export const userLogin = credentials => async (dispatch: any) => {
  dispatch(authActions.loginRequest());
  try {
    const response = await authorizationAPI.signIn(credentials);

    dispatch(authActions.loginSuccess(response.data.user));

    localStorage.setItem(
      'authToken',
      JSON.stringify(response.data.tokens.access),
    );
    localStorage.setItem(
      'refreshToken',
      JSON.stringify(response.data.tokens.refresh),
    );
  } catch (error) {
    console.log(error);
    dispatch(authActions.loginError(error.message));
  }
};

export const userLogOut = refreshToken => async (dispatch: any) => {
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

export const refreshAuthToken = refreshToken => async (dispatch: any) => {
  dispatch(authActions.refreshRequest());
  try {
    const response = await authorizationAPI.refreshAuthToken(refreshToken);
    dispatch(authActions.refreshSuccess());

    localStorage.setItem(
      'authToken',
      JSON.stringify(response.data.tokens.access),
    );
    localStorage.setItem(
      'refreshToken',
      JSON.stringify(response.data.tokens.refresh),
    );
  } catch (error) {
    dispatch(authActions.refreshError());
  }
};
