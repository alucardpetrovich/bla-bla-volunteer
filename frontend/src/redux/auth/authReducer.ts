import authActionTypes from './authActionTypes';

const initialState = {
  id: '',
  status: '',
  involvements: [],
};

const auth = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
      return { ...payload };

    case authActionTypes.LOGIN_SUCCESS:
      return { ...payload };

    case authActionTypes.LOGOUT_SUCCESS:
      return { ...initialState };

    default:
      return state;
  }
};

export default auth;
