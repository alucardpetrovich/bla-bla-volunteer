import { Autocomplete, TextField } from '@mui/material';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { generatePath, useNavigate } from 'react-router-dom';
import { roles } from 'src/constants/roles';
import { getUser } from 'src/store/user/userSelectors';

import { PATHS } from '../../constants/PATH';
import { userLogOut } from '../../store';
import { Logo } from '../atoms';
import ArrowRight from '../atoms/ArrowRight';
import Notifications from '../atoms/Notifications';
// import SearchIcon from '../atoms/SearchIcon';
import { Container, Heading, Text } from '../StyledComponents';
import HeaderBg from './components/HeaderBg';
// import Navigation from './components/Navigation';
import { HeaderSubtitleWrapper, HeaderTitleWrapper, NavWrapper, SignUpButton } from './style';

const Header = () => {
  const { formatMessage } = useIntl();
  // FIXME: пофіксить тип. Без any
  // eslint-disable-next-line
  const isAuth: boolean = useSelector((state: any) => state.auth.isAuthenticated);
  const user = useSelector(getUser);
  const involvements = user?.involvements;
  const userRole = involvements && roles.map(role => (role.id === involvements[0].type ? `${role.title}` : null));

  const dispatch = useDispatch();

  const handleLogOut = () => {
    if (!isAuth) {
      navigate(generatePath(PATHS.LOGIN.path, { lang }));
      return;
    }
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

            {isAuth && (
              <>
                <Text tag="b1">{userRole}</Text>
                <div style={{ width: '360px' }}>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={roles.map(role => role.title)}
                    renderInput={params => (
                      <TextField
                        {...params}
                        sx={{ m: 1, width: '36ch', bgcolor: '#fff' }}
                        size="small"
                        label="Пошук"
                        InputProps={{
                          ...params.InputProps,
                          // startAdornment: (
                          //   <InputAdornment position="start">
                          //     <SearchIcon width={16} />
                          //   </InputAdornment>
                          // ),
                          // placeholder: 'Пошук',
                          type: 'search',
                        }}
                      />
                    )}
                  />
                </div>
                <Notifications width={24} isNew={true} style={{ cursor: 'pointer' }} />
              </>
            )}
            <div style={{ width: '166px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Heading tag="h4" onClick={handleLogOut} style={{ cursor: 'pointer' }}>
                {isAuth ? 'вихід' : 'вхід'}
              </Heading>
              <div style={{ borderRight: '1px solid grey', height: '24px' }}></div>
              <Text tag="b1">ua</Text>
            </div>

            {/* <div style={{ display: 'flex' }}>
              <Navigation style={{ marginRight: '30px' }} />
              <p>lang</p>
            </div> */}
          </NavWrapper>
          {!isAuth && (
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
                  <ArrowRight width={30} />
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
