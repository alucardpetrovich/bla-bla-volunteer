import authActionTypes from './authActionTypes';

const initialState = {
  isAuthenticated: false,
};

const auth = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
      return { ...initialState, ...payload };

    case authActionTypes.LOGIN_SUCCESS:
      return { isAuthenticated: true, ...payload };

    case authActionTypes.LOGOUT_SUCCESS:
      return { ...initialState };

    default:
      return state;
  }
};

export default auth;
