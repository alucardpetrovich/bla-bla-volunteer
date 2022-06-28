// import { useSelector } from 'react-redux';

import { involvementsAPI } from '../../api';
// import { getIsAuth } from '../../store/auth/authSelectors';
import userActions from './userActions';

// FIXME: пофіксить тайпінги
// eslint-disable-next-line
// @ts-ignore
export const userUpdate = credentials => async dispatch => {
  // const isAuth = useSelector(getIsAuth);
  //   if (!isAuth) return;
  dispatch(userActions.userUpdateRequest());

  try {
    const response = await involvementsAPI.updateInvolvements(credentials);
    console.log('response', response);
    // FIXME: пофіксить тайпінги
    // eslint-disable-next-line
    // @ts-ignore
    dispatch(userActions.userUpdateSuccess(response.data.user));
  } catch (error) {
    console.log('error', error);
    // FIXME: пофіксить тайпінги
    // eslint-disable-next-line
    // @ts-ignore
    dispatch(userActions.userUpdateError(error.message));
  }
};
