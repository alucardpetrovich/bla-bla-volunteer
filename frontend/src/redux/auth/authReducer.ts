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
    default:
      return state;
  }
};

export default auth;
