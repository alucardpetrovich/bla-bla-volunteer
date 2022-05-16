import authorizationAPI from '../../api/Auth/Auth';
import { IAuthCredentials } from '../../models/authModel/authModel';
import authActions from './authActions';

export const userRegistration =
  (credentials: IAuthCredentials) => async (dispatch: any) => {
    dispatch(authActions.registrationRequest());
    try {
      const response = await authorizationAPI.signUp(credentials);
      dispatch(authActions.registrationSuccess(response.data));
    } catch (error) {
      dispatch(authActions.registrationError(error));
    }
  };
