import { RootState } from '../store';

export const getIsAuth = (state: RootState) => state.auth.isAuthenticated;
