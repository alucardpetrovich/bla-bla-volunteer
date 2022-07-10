import { Autocomplete, TextField } from '@mui/material';
import { ArrowRightIcon, Logo, NotificationsIcon, Text, TextButton } from '@ui-kit';
import { useIntl } from 'react-intl';
import { useLocalStorage, useLocation } from 'react-use';
import { roles } from 'src/constants/roles';
import useNavigation from 'src/hooks/useNavigation';
import { getUser } from 'src/store/user/userSelectors';

import { StorageKeys } from '../../constants/storageKeys';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IAuthAccessRefresh } from '../../models/authModel/authModel';
import { getIsAuth, userLogOut } from '../../store';
import LangDrawer from '../LangDrawer';
import { Container } from '../StyledComponents';
import HeaderBg from './components/HeaderBg';
import {
  CustomHeading,
  CustomText,
  HeaderLogo,
  HeaderSubtitleWrapper,
  HeaderTitleWrapper,
  HeaderWrapper,
  LogoBackground,
  LogoWrapper,
  NavWrapper,
  SearchWrapper,
  SignUpButton,
  UserInfoWrapper,
  VertDevider,
} from './style';

const Header = () => {
  const { formatMessage } = useIntl();
  const isAuth = useAppSelector(getIsAuth);
  const user = useAppSelector(getUser);
  const involvements = user?.involvements;
  const userRole =
    involvements?.length && roles.map(role => (role.id === involvements[0].type ? `${role.title}` : null));
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
              {!isAuth && <Logo height="70px" onClick={goToHome} />}

              <NavWrapper>
                <TextButton onClick={handleLogOut}>
                  {formatMessage({
                    defaultMessage: 'вхід',
                    description: 'Logout: title',
                  })}
                </TextButton>
                <VertDevider />
                <Text tag="b1">ua</Text>
              </NavWrapper>
            </HeaderWrapper>
            {!isAuth && !isShowHeading && (
              <HeaderTitleWrapper>
                <CustomHeading tag="h2">
                  {formatMessage({
                    defaultMessage: 'Безпечна платформа координації передачі гуманітарної допомоги',
                    description: 'Header: title',
                  })}
                </CustomHeading>
                <HeaderSubtitleWrapper>
                  <CustomText tag="b1">
                    {formatMessage({
                      defaultMessage: 'Зареєструйся та стань частиною українського волонтерського руху',
                      description: 'Header: registrationComment',
                    })}
                  </CustomText>
                  <SignUpButton onClick={goToRegistration}>
                    <Text tag="b1">
                      {formatMessage({
                        defaultMessage: 'реєстрація',
                        description: 'Header: registrationButton',
                      })}
                    </Text>
                    <ArrowRightIcon width={30} />
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
            <HeaderLogo height="35px" onClick={goToHome} />
          </LogoWrapper>

          <UserInfoWrapper>
            <Text tag="b1">{userRole}</Text>
            <SearchWrapper>
              <Autocomplete
                freeSolo
                id="searchField"
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
            </SearchWrapper>
            <NotificationsIcon width={24} isNew={true} />

            <NavWrapper>
              <TextButton onClick={handleLogOut}>
                {formatMessage({
                  defaultMessage: 'вихід',
                  description: 'Logout: title',
                })}
              </TextButton>
              <LangDrawer />
            </NavWrapper>
          </UserInfoWrapper>
        </Container>
      )}
    </header>
  );
};

export default Header;
