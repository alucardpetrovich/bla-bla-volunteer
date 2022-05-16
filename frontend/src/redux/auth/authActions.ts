import authActionTypes from './authActionTypes';

const registrationRequest = () => ({
  type: authActionTypes.REGISTER_REQUEST,
});

const registrationSuccess = authResp => ({
  type: authActionTypes.REGISTER_SUCCESS,
  payload: authResp,
});

const registrationError = error => ({
  type: authActionTypes.REGISTER_ERROR,
  payload: error,
});

const loginRequest = () => ({
  type: authActionTypes.LOGIN_REQUEST,
});

const loginSuccess = credential => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: credential,
});

const loginError = error => ({
  type: authActionTypes.LOGIN_ERROR,
  payload: error,
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
};

export default authActions;
