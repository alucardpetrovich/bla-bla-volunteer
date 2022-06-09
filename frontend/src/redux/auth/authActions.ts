import authActionTypes from './authActionTypes';

const registrationRequest = () => ({
  type: authActionTypes.REGISTER_REQUEST,
});

const registrationSuccess = user => ({
  type: authActionTypes.REGISTER_SUCCESS,
  payload: user,
});

const registrationError = error => ({
  type: authActionTypes.REGISTER_ERROR,
  payload: error,
});

const loginRequest = () => ({
  type: authActionTypes.LOGIN_REQUEST,
});

const loginSuccess = user => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: { user },
});

const loginError = error => ({
  type: authActionTypes.LOGIN_ERROR,
  payload: error.response.data.message,
});

const logoutRequest = () => ({
  type: authActionTypes.LOGOUT_REQUEST,
});

const logoutSuccess = () => ({
  type: authActionTypes.LOGOUT_SUCCESS,
});

const logoutError = () => ({
  type: authActionTypes.LOGOUT_ERROR,
});

const refreshRequest = () => ({
  type: authActionTypes.REFRESH_REQUEST,
});

const refreshSuccess = () => ({
  type: authActionTypes.REFRESH_SUCCESS,
});

const refreshError = () => ({
  type: authActionTypes.REFRESH_ERROR,
});

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
};

export default authActions;
