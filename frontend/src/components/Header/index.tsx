import Navigation from './components/Navigation';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../redux/auth/authOperations';
import { useSelector } from 'react-redux';

const Header = () => {
  const isAuth: boolean = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));

    if (refreshToken) {
      dispatch(userLogOut({ refreshToken: refreshToken.token }) as any);
    }
  };
  return (
    <header>
      {isAuth ? <button onClick={handleLogOut}>Sign Out</button> : null}
      <Navigation />
    </header>
  );
};

export default Header;
