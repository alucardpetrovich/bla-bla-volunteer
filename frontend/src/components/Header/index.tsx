import Navigation from './components/Navigation';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { Container, Heading, Text } from 'components/StyledComponents';
import { Logo } from 'components/atoms';
import HeaderBg from './components/HeaderBg';
import { HeaderSubtitleWrapper, HeaderTitleWrapper, NavWrapper, SignUpButton } from './style';
import ArrowRight from 'components/atoms/ArrowRight';
import { useTheme } from 'styled-components';

const Header = () => {
  const theme = useTheme();
  const isAuth: boolean = useSelector((state: any) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));

    if (refreshToken) {
      dispatch(userLogOut({ refreshToken: refreshToken.token }) as any);
    }
  };
  console.log('theme', theme);
  return (
    <header>
      <HeaderBg>
        <Container tag="header">
          <NavWrapper>
            <Logo height="70px" />
            {isAuth ? <button onClick={handleLogOut}>Sign Out</button> : null}
            <Navigation />
          </NavWrapper>
          <HeaderTitleWrapper>
            <Heading tag="h2" style={{ marginBottom: '200px' }}>
              Безпечна платформа координації передачі гуманітарної допомоги
            </Heading>
            <HeaderSubtitleWrapper>
              <Text tag="b1" style={{ width: '345px' }}>
                Зареєструйся та стань частиною українського волонтерського руху
              </Text>
              <SignUpButton color={theme.palette.text.primary}>
                <Text tag="b1">реєстрація</Text>
                <ArrowRight />
              </SignUpButton>
            </HeaderSubtitleWrapper>
          </HeaderTitleWrapper>
        </Container>
      </HeaderBg>
    </header>
  );
};

export default Header;
