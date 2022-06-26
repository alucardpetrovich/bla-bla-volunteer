import userConstants from './userConstants';

const initialState = {
  user: {
    involvements: [],
  },
};

const user = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case userConstants.USER_UPDATE_SUCCESS:
      return { ...initialState, ...payload };

    default:
      return state;
  }
};

export default user;
