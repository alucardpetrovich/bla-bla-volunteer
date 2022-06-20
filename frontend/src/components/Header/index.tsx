import { useDispatch, useSelector } from 'react-redux';
import { generatePath, useNavigate } from 'react-router-dom';

import { PATHS } from '../../constants/PATH';
import { userLogOut } from '../../store';
import { Logo } from '../atoms';
import ArrowRight from '../atoms/ArrowRight';
import { Container, Heading, Text } from '../StyledComponents';
import HeaderBg from './components/HeaderBg';
import Navigation from './components/Navigation';
import { HeaderSubtitleWrapper, HeaderTitleWrapper, NavWrapper, SignUpButton } from './style';

const Header = () => {
  // FIXME: пофіксить тип. Без any
  // eslint-disable-next-line
  const isAuth: boolean = useSelector((state: any) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    // FIXME: пофіксить
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));

    if (refreshToken) {
      // FIXME: пофіксить тип. as any дуже погано. Стараємся без as any. По можливості замінюємо на typeguard. Якщо не
      //  знаємо як пінаємо Вадіма
      // eslint-disable-next-line
      dispatch(userLogOut({ refreshToken: refreshToken.token }) as any);
    }
  };

  // FIXME: пофіксить
  // eslint-disable-next-line
  const lang = useSelector(state => 'ua');
  const navigate = useNavigate();

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
                <SignUpButton onClick={() => navigate(generatePath(PATHS.REGISTRATION.path, { lang }))}>
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
