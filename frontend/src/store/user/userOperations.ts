// import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { involvementsAPI } from '../../api';
// import { getIsAuth } from '../../store/auth/authSelectors';
import userActions from './userActions';

interface ICredentials {
  involvements: string[];
}

export const userUpdate = (credentials: ICredentials) => async (dispatch: Dispatch) => {
  // const isAuth = useSelector(getIsAuth);
  // if (!isAuth) return;
  dispatch(userActions.userUpdateRequest());

  try {
    const response = await involvementsAPI.updateInvolvements(credentials);
    dispatch(userActions.userUpdateSuccess(response.data.user));
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error message', error.message);
      dispatch(userActions.userUpdateError(error.message));
    } else {
      console.log('Unexpected error', error);
    }
  }
};
