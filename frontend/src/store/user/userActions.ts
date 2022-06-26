import userConstants from './userConstants';

const userUpdateRequest = () => ({
  type: userConstants.USER_UPDATE_REQUEST,
});

const userUpdateSuccess = user => ({
  type: userConstants.USER_UPDATE_SUCCESS,
  payload: user,
});

const userUpdateError = error => ({
  type: userConstants.USER_UPDATE_ERROR,
  payload: error,
});

export default {
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateError,
};
