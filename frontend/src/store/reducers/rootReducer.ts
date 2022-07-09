import { combineReducers } from 'redux';

import auth from '../auth/authReducer';
import lang from '../lang/langReducer';

const rootReducer = combineReducers({ auth, lang });

export default rootReducer;
