import { AnyAction, applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkDispatch } from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// FIXME: треба пофіксить
// eslint-disable-next-line
// @ts-ignore
const composeEnhancers: typeof compose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
