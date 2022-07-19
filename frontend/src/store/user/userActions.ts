import userConstants from './userConstants';

const userUpdateRequest = () => ({
  type: userConstants.USER_UPDATE_REQUEST,
});

// FIXME: пофіксить тайпінги
// eslint-disable-next-line
// @ts-ignore
const userUpdateSuccess = user => ({
  type: userConstants.USER_UPDATE_SUCCESS,
  payload: user,
});

// FIXME: пофіксить тайпінги
// eslint-disable-next-line
// @ts-ignore
const userUpdateError = error => ({
  type: userConstants.USER_UPDATE_ERROR,
  payload: error,
});

export default {
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateError,
};
