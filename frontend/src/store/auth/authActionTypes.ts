const REGISTER_REQUEST = 'auth/registerRequest';
const REGISTER_SUCCESS = 'auth/registerSuccess';
const REGISTER_ERROR = 'auth/registerError';

const LOGIN_REQUEST = 'auth/loginRequest';
const LOGIN_SUCCESS = 'auth/loginSuccess';
const LOGIN_ERROR = 'auth/loginError';

const LOGOUT_REQUEST = 'auth/logoutRequest';
const LOGOUT_SUCCESS = 'auth/logoutSuccess';
const LOGOUT_ERROR = 'auth/logoutError';

const REFRESH_REQUEST = 'auth/refreshRequest';
const REFRESH_SUCCESS = 'auth/refreshSuccess';
const REFRESH_ERROR = 'auth/refreshError';

const SEND_RESET_PASSWORD_LINK_REQUEST = 'auth/sendResetPasswordLinkRequest';
const SEND_RESET_PASSWORD_LINK_SUCCESS = 'auth/sendResetPasswordLinkSuccess';
const SEND_RESET_PASSWORD_LINK_ERROR = 'auth/sendResetPasswordLinkError';

const RESET_PASSWORD_REQUEST = 'auth/resetPasswordRequest';
const RESET_PASSWORD_SUCCESS = 'auth/resetPasswordSuccess';
const RESET_PASSWORD_ERROR = 'auth/resetPasswordError';

const authActionTypes = {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  REFRESH_REQUEST,
  REFRESH_SUCCESS,
  REFRESH_ERROR,
  SEND_RESET_PASSWORD_LINK_REQUEST,
  SEND_RESET_PASSWORD_LINK_SUCCESS,
  SEND_RESET_PASSWORD_LINK_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
};
export default authActionTypes;
