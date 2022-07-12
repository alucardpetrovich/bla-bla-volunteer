import { useNavigate } from 'react-router';

import { useGetURL } from './useGetURL';

/**
 * Отсюда брать когда нужно сделать переход на другой роут по клику. Например, по кнопке button
 * !!! НЕ ходходит для Link, NavLink или Navigate для to  !!!
 * !!! НЕ подходит для path в Route                       !!!
 */
export default function useNavigation() {
  const navigate = useNavigate();
  const { getHomeURL, getLoginURL, getRegistrationURL, getForgotPasswordURL, getVerificationURL } = useGetURL();

  const goToHome = () => navigate(getHomeURL());
  const goToLogin = () => navigate(getLoginURL());
  const goToForgotPassword = () => navigate(getForgotPasswordURL());
  const goToVerificationPage = () => navigate(getVerificationURL());

  const goToRegistration = () => navigate(getRegistrationURL());

  return {
    goToHome,
    goToLogin,
    goToRegistration,
    goToForgotPassword,
    goToVerificationPage,
  };
}
