import langConstants from './langConstants';

const changeLangRequest = () => ({
  type: langConstants.CHANGE_LANGUAGE_REQUEST,
});

const changeLangSuccess = (lang: string) => ({
  type: langConstants.CHANGE_LANGUAGE_SUCCESS,
  payload: lang,
});

const changeLangError = (error: unknown) => ({
  type: langConstants.CHANGE_LANGUAGE_ERROR,
  payload: error,
});

const langActions = {
  changeLangRequest,
  changeLangSuccess,
  changeLangError,
};

export default langActions;
