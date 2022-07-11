import { RootState } from '../store';

export const getUser = (state: RootState) => state.auth.user;
export const getUserInvolvement = (state: RootState) => state.auth.user?.involvements[0].type;
