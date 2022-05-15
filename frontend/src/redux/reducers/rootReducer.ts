import { combineReducers } from 'redux';
import auth from '../auth/authReducer';

// Need to fix have TS ERROR!
const reducer = (state = {}) => state;

const rootReducer = combineReducers({ reducer, authReducer: auth });

export default rootReducer;
