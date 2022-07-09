import { Reducer } from 'redux';

import langConstants from './langConstants';

interface LangState {
  currentLang: string;
}
type LangReducer = Reducer<LangState>;

const initialState: LangState = {
  currentLang: 'ua',
};

const lang: LangReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case langConstants.CHANGE_LANGUAGE_SUCCESS:
      return { ...initialState, currentLang: payload };

    default:
      return state;
  }
};

export default lang;
