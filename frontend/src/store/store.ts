import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// FIXME: пофіксить тайпінги. as typeof compose дуже погано. Подумать як поправить
// eslint-disable-next-line
// @ts-ignore
const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);
export default store;
