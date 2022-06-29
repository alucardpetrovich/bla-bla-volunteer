import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { generatePath, useLocation, useNavigate } from 'react-router-dom';
import { RootState } from 'src/models/rootState/rootState';

import { PATHS } from '../../constants/PATH';
import { userLogOut } from '../../store';
import { Logo } from '../atoms';
import ArrowRight from '../atoms/ArrowRight';
import { Container, Heading, Text } from '../StyledComponents';
import HeaderBg from './components/HeaderBg';
import Navigation from './components/Navigation';
import { HeaderSubtitleWrapper, HeaderTitleWrapper, NavWrapper, SignUpButton } from './style';

const Header = () => {
  const { formatMessage } = useIntl();
  const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isShowHeading = pathname.includes('registration') || pathname.includes('login') || isAuth;

  const handleLogOut = () => {
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken') as string);

    if (refreshToken) {
      // FIXME: пофіксить тип. as any дуже погано. Стараємся без as any. По можливості замінюємо на typeguard. Якщо не
      //  знаємо як пінаємо Вадіма
      // eslint-disable-next-line
      dispatch(userLogOut({ refreshToken: refreshToken.token } as unknown as string) as any);
    }
  };

  // FIXME: пофіксить
  // eslint-disable-next-line
  const lang = useSelector((state: RootState) => 'ua');
  const navigate = useNavigate();

  return (
    <header>
      <HeaderBg isAuth={isShowHeading}>
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
          {!isShowHeading && (
            <HeaderTitleWrapper>
              <Heading tag="h2" style={{ marginBottom: '200px' }}>
                {formatMessage({
                  defaultMessage: 'Безпечна платформа координації передачі гуманітарної допомоги',
                  description: 'Header: title',
                })}
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
