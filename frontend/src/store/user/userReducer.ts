import userConstants from './userConstants';

const initialState = {
  user: {
    involvements: [],
  },
};

// FIXME: пофіксить тайпінги
// eslint-disable-next-line
// @ts-ignore
const userReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case userConstants.USER_UPDATE_SUCCESS:
      console.log('type', type, payload);
      return { ...payload };

    default:
      return state;
  }
};

export default userReducer;
