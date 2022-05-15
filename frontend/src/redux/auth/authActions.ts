import authActionTypes from './authActionTypes';

const registrationRequest = () => ({
  type: authActionTypes.REGISTER_REQUEST,
});

const registrationSuccess = authResp => ({
  type: authActionTypes.REGISTER_SUCCESS,
  auth: authResp,
});

const registrationError = error => ({
  type: authActionTypes.REGISTER_ERROR,
  auth: error,
});

export default {
  registrationRequest,
  registrationSuccess,
  registrationError,
};
