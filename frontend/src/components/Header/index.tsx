import { Autocomplete, TextField } from '@mui/material';
import { useIntl } from 'react-intl';
import { useMatch } from 'react-router';
import { useLocalStorage } from 'react-use';
import { PATHS } from 'src/constants/PATH';
import { roles } from 'src/constants/roles';
import useNavigation from 'src/hooks/useNavigation';
import { getUser } from 'src/store/user/userSelectors';

import bgImgS from '../../assets/images/header-bg-s.png';
import { StorageKeys } from '../../constants/storageKeys';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IAuthAccessRefresh } from '../../models/authModel/authModel';
import { getIsAuth, userLogOut } from '../../store';
import { Logo } from '../atoms';
import ArrowRight from '../atoms/ArrowRight';
import Notifications from '../atoms/Notifications';
import { Container, Heading, Text } from '../StyledComponents';
import HeaderBg from './components/HeaderBg';
import UserInfo from './components/UserInfo';
import { HeaderSubtitleWrapper, HeaderTitleWrapper, HeaderWrapper, SignUpButton } from './style';

const Header = () => {
  const { formatMessage } = useIntl();
  const isAuth = useAppSelector(getIsAuth);

  const { involvements } = useAppSelector(getUser) || {};
  const role = involvements && roles.find(role => role.id === involvements[0]);
  const [refreshToken] = useLocalStorage<IAuthAccessRefresh>(StorageKeys.refreshToken);

  const dispatch = useAppDispatch();
  const { goToHome, goToLogin, goToRegistration } = useNavigation();

  const isLogin = !!useMatch(PATHS.LOGIN.path);
  const isRegistration = !!useMatch(PATHS.REGISTRATION.path);
  const isShowHeading = isLogin || isRegistration;

  const handleLogOut = () => {
    if (!isAuth) {
      goToLogin();
      return;
    }

    if (refreshToken) {
      dispatch(userLogOut({ refreshToken: refreshToken.token }));
    }
  };

  return (
    <header>
      {!isAuth && (
        <HeaderBg isAuth={isAuth} isShowHeading={isShowHeading}>
          <Container tag="header" isAuth={isAuth} isShowHeading={isShowHeading}>
            <HeaderWrapper>
              {!isAuth && <Logo height="70px" onClick={goToHome} style={{ cursor: 'pointer' }} />}

              <div style={{ width: '166px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Heading tag="h4" onClick={handleLogOut} style={{ cursor: 'pointer' }}>
                  {isAuth ? 'вихід' : 'вхід'}
                </Heading>
                <div style={{ borderRight: '1px solid grey', height: '24px' }}></div>
                <Text tag="b1">ua</Text>
              </div>
            </HeaderWrapper>
            {!isAuth && !isShowHeading && (
              <>
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
                    <SignUpButton onClick={goToRegistration}>
                      <Text tag="b1">реєстрація</Text>
                      <ArrowRight width={30} />
                    </SignUpButton>
                  </HeaderSubtitleWrapper>
                </HeaderTitleWrapper>
              </>
            )}
          </Container>
        </HeaderBg>
      )}

      {isAuth && (
        <Container tag="headerAuth">
          <div style={{ display: 'flex' }}>
            {/*FIXME: Ніяких інлайн стилів плз. Дропнуть*/}
            <div
              style={{
                width: '250px',
                height: '128px',
                backgroundImage: `url(${bgImgS})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
              }}
            />
            <Logo
              height="35px"
              onClick={goToHome}
              style={{ cursor: 'pointer', position: 'absolute', top: '48px', left: '32px' }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 'calc(100% - 250px)',
              padding: '0px 32px',
            }}
          >
            {role && <Text tag="b1">{role.title}</Text>}
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
                      type: 'search',
                    }}
                  />
                )}
              />
            </div>
            <Notifications width={24} isNew={true} style={{ cursor: 'pointer' }} />

            <UserInfo />

            <div style={{ width: '166px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Heading tag="h4" onClick={handleLogOut}>
                {isAuth ? 'вихід' : 'вхід'}
              </Heading>
              <div style={{ borderRight: '1px solid grey', height: '24px' }} />
              <Text tag="b1">ua</Text>
            </div>
          </div>
        </Container>
      )}
    </header>
  );
};

export default Header;
