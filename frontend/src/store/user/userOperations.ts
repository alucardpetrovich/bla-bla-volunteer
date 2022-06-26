import { useSelector } from 'react-redux';
import { involvementsAPI } from 'api';
import { getIsAuth } from 'redux/auth/authSelectors';
import userActions from './userActions';

export const userUpdate = credentials => dispatch => {
  const isAuth = useSelector(getIsAuth);
  console.log('credentials', credentials);
  //   if (!isAuth) return;
  dispatch(userActions.userUpdateRequest());

  try {
    const response = involvementsAPI.updateInvolvements(credentials);
    console.log('response', response);
    // dispatch(userActions.userUpdateSuccess(response.data));
  } catch (error) {
    console.log('error', error);
    dispatch(userActions.userUpdateError(error.message));
  }
  console.log('return');
};
