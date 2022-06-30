import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { generatePath } from 'react-router-dom';
import { PATHS } from 'src/constants/PATH';

/**
 * Отсюда брать когда нужно сделать переход на другой роут по клику. Например, по кнопке button
 * !!! НО это НЕ ходходит для Link, NavLink или Navigate для to  !!!
 * !!! Также НЕ подходит для path в Route                        !!!
 */
export default function useNavigation() {
  const lang = useSelector(() => 'ua');
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(`/${generatePath(PATHS.HOME.path, { lang })}`);
  };

  const goToLogin = () => {
    navigate(`/${generatePath(PATHS.LOGIN.path, { lang })}`);
  };

  const goToRegistration = () => {
    navigate(`/${generatePath(PATHS.REGISTRATION.path, { lang })}`);
  };

  return {
    goToHome,
    goToLogin,
    goToRegistration,
  };
}
