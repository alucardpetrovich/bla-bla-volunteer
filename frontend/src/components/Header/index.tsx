import { Autocomplete, TextField } from '@mui/material';
import { ArrowRightIcon, Logo, NotificationsIcon, Text, TextButton } from '@ui-kit';
import { useIntl } from 'react-intl';
import { useMatch } from 'react-router';
import { useLocalStorage } from 'react-use';
import { PATHS } from 'src/constants/PATH';
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
import UserInfo from './components/UserInfo';
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

  const { involvements } = useAppSelector(getUser) || {};
  const role = involvements && roles.find(role => role.id === involvements[0].type);

  const [refreshToken] = useLocalStorage<IAuthAccessRefresh>(StorageKeys.refreshToken);

  const dispatch = useAppDispatch();
  const { goToHome, goToLogin, goToRegistration } = useNavigation();

  const isLogin = !!useMatch(PATHS.LOGIN.path);
  const isRegistration = !!useMatch(PATHS.REGISTRATION.path);
  const isResetPassword = !!useMatch(PATHS.RESET_PASSWORD.path);
  const isForgotPassword = !!useMatch(PATHS.FORGOT_PASSWORD.path);
  const isVerification = !!useMatch(PATHS.VERIFICATION.path);
  const isShowHeading = isLogin || isRegistration || isResetPassword || isForgotPassword || isVerification;

  const handleLogOut = () => {
    if (!isAuth) {
      goToLogin();
      return;
    } else {
      if (refreshToken) {
        dispatch(userLogOut({ refreshToken: refreshToken.token }));
      }
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
            {role && <Text tag="b1">{role.title}</Text>}
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

            <UserInfo />

            <NavWrapper>
              <TextButton onClick={handleLogOut}>
                {formatMessage({
                  defaultMessage: 'вихід',
                  description: 'Logout: title',
                })}
              </TextButton>
              <VertDevider />
              <LangDrawer />
            </NavWrapper>
          </UserInfoWrapper>
        </Container>
      )}
    </header>
  );
};

export default Header;
