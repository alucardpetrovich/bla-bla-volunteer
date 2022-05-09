import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
} from './../actionTypes/authActionTypes';

const initialState = {
  auth: false,
};

const auth = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, auth: payload };

    case LOGOUT_REQUEST:
      return { ...state, auth: payload };

    default:
      return state;
  }
};

export default auth;
