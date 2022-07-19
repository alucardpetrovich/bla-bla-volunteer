import { RootState } from '../store';

export const getLang = (state: RootState) => state.lang.currentLang;
