import axios from 'axios';
import authorizationAPI from '../../api/Auth/Auth';
/* eslint-disable no-unused-vars */
import { IAuthCredentials } from '../../models/authModel/authModel';
import authActions from './authActions';

export const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userRegistration =
  (credentials: IAuthCredentials) => async (dispatch: any) => {
    dispatch(authActions.registrationRequest());
    try {
      const response = await authorizationAPI.signUp(credentials);
      dispatch(authActions.registrationSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(authActions.registrationError(error));
    }
  };
