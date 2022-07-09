import { AppDispatch } from '../store';
import langActions from './langActions';

export const changeLang = (lang: string | null) => (dispatch: AppDispatch) => {
  dispatch(langActions.changeLangRequest());

  try {
    if (lang) {
      dispatch(langActions.changeLangSuccess(lang));
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error.message', error.message);
      dispatch(langActions.changeLangError(error.message));
    }
    console.log('Unexpected error', error);
  }
};
