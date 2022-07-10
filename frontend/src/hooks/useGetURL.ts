import { generatePath } from 'react-router';
import { PATHS } from 'src/constants/PATH';

import { useAppSelector } from './useStore';

/**
 * Если нужно взять путь как СТРОКУ
 *    ===> ПОДХОДИТ ДЛЯ компонентов Link, NavLink и Navigate в to   <===
 *    ===> ПОДХОДИТ ДЛЯ параментра navigate с useNavigate           <===
 *
 * !!! НЕ подходит для Route в path
 * !!! НЕ подходит при клике, например по кнопке, что бы произошел переход !!!
 */
export const useGetURL = () => {
  const lang = useAppSelector(() => 'ua');

  const getHomeURL = () => {
    return `/${generatePath(PATHS.HOME.path, { lang })}`;
  };

  const getLoginURL = () => {
    return `/${generatePath(PATHS.LOGIN.path, { lang })}`;
  };

  const getRegistrationURL = () => {
    return `/${generatePath(PATHS.REGISTRATION.path, { lang })}`;
  };

  const getDonarURL = () => {
    return `/${generatePath(PATHS.DONAR.path, { lang })}`;
  };

  const getHubURL = () => {
    return `/${generatePath(PATHS.HUB.path, { lang })}`;
  };

  const getDriverURL = () => {
    return `/${generatePath(PATHS.DRIVER.path, { lang })}`;
  };

  const getRecipientURL = () => {
    return `/${generatePath(PATHS.RECIPIENT.path, { lang })}`;
  };

  const getVerificationURL = () => {
    return `/${generatePath(PATHS.VERIFICATION.path, { lang })}`;
  };

  const getForgotPasswordURL = () => {
    return `/${generatePath(PATHS.FORGOT_PASSWORD.path, { lang })}`;
  };

  const getRolesURL = () => {
    return `/${generatePath(PATHS.ROLES.path, { lang })}`;
  };

  const getProfileURL = () => {
    return `/${generatePath(PATHS.PROFILE.path, { lang })}`;
  };

  const getNotFound404URL = () => {
    return `/${generatePath(PATHS.NOT_FOUND_404.path, { lang })}`;
  };

  return {
    getHomeURL,

    getLoginURL,
    getRegistrationURL,

    getDonarURL,
    getHubURL,
    getDriverURL,
    getRecipientURL,

    getVerificationURL,
    getForgotPasswordURL,

    getRolesURL,
    getProfileURL,

    getNotFound404URL,
  };
};
