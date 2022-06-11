import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, generatePath } from 'react-router-dom';
import Navigation from './components/Navigation';
import { userLogOut } from '../../redux/auth/authOperations';
import { Container, Heading, Text } from 'components/StyledComponents';
import { Logo } from 'components/atoms';
import HeaderBg from './components/HeaderBg';
import { HeaderSubtitleWrapper, HeaderTitleWrapper, NavWrapper, SignUpButton } from './style';
import ArrowRight from 'components/atoms/ArrowRight';
import { PATHS } from 'constants/PATH';
import { useTheme } from 'styled-components';

const Header = () => {
  const isAuth: boolean = useSelector((state: any) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));

    if (refreshToken) {
      dispatch(userLogOut({ refreshToken: refreshToken.token }) as any);
    }
  };

  const lang = useSelector(state => 'ua');
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <header>
      <HeaderBg isAuth={isAuth}>
        <Container tag="header" isAuth={isAuth}>
          <NavWrapper>
            <Logo
              height="70px"
              onClick={() => navigate(generatePath(PATHS.HOME.path, { lang }))}
              style={{ cursor: 'pointer' }}
            />
            {isAuth ? <button onClick={handleLogOut}>Sign Out</button> : null}
            <div style={{ display: 'flex' }}>
              <Navigation style={{ marginRight: '30px' }} />
              <p>lang</p>
            </div>
          </NavWrapper>
          {!isAuth && (
            <HeaderTitleWrapper>
              <Heading tag="h2" style={{ marginBottom: '200px' }}>
                Безпечна платформа координації передачі гуманітарної допомоги
              </Heading>
              <HeaderSubtitleWrapper>
                <Text tag="b1" style={{ width: '345px' }}>
                  Зареєструйся та стань частиною українського волонтерського руху
                </Text>
                <SignUpButton
                  color={theme.palette.text.primary}
                  onClick={() => navigate(generatePath(PATHS.REGISTRATION.path, { lang }))}
                >
                  <Text tag="b1">реєстрація</Text>
                  <ArrowRight />
                </SignUpButton>
              </HeaderSubtitleWrapper>
            </HeaderTitleWrapper>
          )}
        </Container>
      </HeaderBg>
    </header>
  );
};

export default Header;
