import Navigation from './components/Navigation';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { Container } from 'components/StyledComponents';
import { Logo } from 'components/atoms';

const Header = () => {
  const isAuth: boolean = useSelector((state: any) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));

    if (refreshToken) {
      dispatch(userLogOut({ refreshToken: refreshToken.token }) as any);
    }
  };
  return (
    <header>
      <Container tag="header">
        <Logo height="70px" />
        {isAuth ? <button onClick={handleLogOut}>Sign Out</button> : null}
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
