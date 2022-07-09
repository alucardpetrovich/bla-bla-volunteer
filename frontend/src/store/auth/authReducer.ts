import { Reducer } from 'redux';

import { IUser } from '../../models/userModel/userModel';
import authActionTypes from './authActionTypes';

interface AuthState {
  isAuthenticated: boolean;
  user: IUser | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

type AuthReducer = Reducer<AuthState>;

const auth: AuthReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
      return { ...initialState, ...payload };

    case authActionTypes.REGISTER_ERROR:
      return { ...initialState, error: payload };

    case authActionTypes.LOGIN_SUCCESS:
      return { ...payload, isAuthenticated: true };

    case authActionTypes.LOGIN_ERROR:
      return { ...initialState, error: payload };

    case authActionTypes.LOGOUT_SUCCESS:
      return { ...initialState };

    case authActionTypes.LOGOUT_ERROR:
      return { ...initialState, error: payload };

    case authActionTypes.SEND_RESET_PASSWORD_LINK_ERROR:
      return { ...initialState, error: payload };

    default:
      return state;
  }
};

export default auth;
