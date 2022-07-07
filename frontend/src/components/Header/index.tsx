import { Autocomplete, TextField } from '@mui/material';
import { TextButton } from '@ui-kit';
import { useIntl } from 'react-intl';
import { useLocalStorage, useLocation } from 'react-use';
import { roles } from 'src/constants/roles';
import useNavigation from 'src/hooks/useNavigation';
import { getUser } from 'src/store/user/userSelectors';

import { StorageKeys } from '../../constants/storageKeys';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IAuthAccessRefresh } from '../../models/authModel/authModel';
import { getIsAuth, userLogOut } from '../../store';
import { Logo } from '../atoms';
import ArrowRight from '../atoms/ArrowRight';
import Notifications from '../atoms/Notifications';
import { Container, Heading, Text } from '../StyledComponents';
import HeaderBg from './components/HeaderBg';
import {
  HeaderSubtitleWrapper,
  HeaderTitleWrapper,
  HeaderWrapper,
  LogoBackground,
  LogoWrapper,
  SignUpButton,
  UserInfoWrapper,
} from './style';

const Header = () => {
  const { formatMessage } = useIntl();
  const isAuth = useAppSelector(getIsAuth);
  const user = useAppSelector(getUser);
  const involvements = user?.involvements;
  const userRole = involvements?.length && roles.map(role => (role.id === involvements[0] ? `${role.title}` : null));
  const [refreshToken] = useLocalStorage<IAuthAccessRefresh>(StorageKeys.refreshToken);

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { goToHome, goToLogin, goToRegistration } = useNavigation();

  const isShowHeading = !!(pathname?.includes('registration') || pathname?.includes('login'));

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
                <TextButton onClick={handleLogOut}>
                  {formatMessage({
                    defaultMessage: 'вхід',
                    description: 'Logout: title',
                  })}
                </TextButton>
                <div style={{ borderRight: '1px solid grey', height: '24px' }}></div>
                <Text tag="b1">ua</Text>
              </div>
            </HeaderWrapper>
            {!isAuth && !isShowHeading && (
              <HeaderTitleWrapper>
                <Heading tag="h2" style={{ marginBottom: '200px' }}>
                  {formatMessage({
                    defaultMessage: 'Безпечна платформа координації передачі гуманітарної допомоги',
                    description: 'Header: title',
                  })}
                </Heading>
                <HeaderSubtitleWrapper>
                  <Text tag="b1" style={{ width: '345px' }}>
                    {formatMessage({
                      defaultMessage: 'Зареєструйся та стань частиною українського волонтерського руху',
                      description: 'Header: registrationComment',
                    })}
                  </Text>
                  <SignUpButton onClick={goToRegistration}>
                    <Text tag="b1">
                      {formatMessage({
                        defaultMessage: 'реєстрація',
                        description: 'Header: registrationButton',
                      })}
                    </Text>
                    <ArrowRight width={30} />
                  </SignUpButton>
                </HeaderSubtitleWrapper>
              </HeaderTitleWrapper>
            )}
          </Container>
        </HeaderBg>
      )}
      {isAuth && (
        <Container tag="headerAuth">
          <LogoWrapper>
            <LogoBackground />
            <Logo
              height="35px"
              onClick={goToHome}
              style={{ cursor: 'pointer', position: 'absolute', top: '48px', left: '32px' }}
            />
          </LogoWrapper>

          <UserInfoWrapper>
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
                    label={formatMessage({
                      defaultMessage: 'Пошук',
                      description: 'Header: searchField',
                    })}
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
            </div>
            <Notifications width={24} isNew={true} style={{ cursor: 'pointer' }} />

            <div style={{ width: '166px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextButton onClick={handleLogOut}>
                {formatMessage({
                  defaultMessage: 'вихід',
                  description: 'Logout: title',
                })}
              </TextButton>
              <div style={{ borderRight: '1px solid grey', height: '24px' }}></div>
              <Text tag="b1">ua</Text>
            </div>
          </UserInfoWrapper>
        </Container>
      )}
    </header>
  );
};

export default Header;
