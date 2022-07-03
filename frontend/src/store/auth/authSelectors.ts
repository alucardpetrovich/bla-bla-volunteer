import { RootState } from 'src/models/rootState/rootState';

export const getIsAuth = (state: RootState) => state.auth.isAuthenticated;
