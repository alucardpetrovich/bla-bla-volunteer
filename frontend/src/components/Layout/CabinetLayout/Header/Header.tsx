import SearchIcon from '@mui/icons-material/Search';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { useUserConfig } from '../useUserConfig';
import {
  Box,
  CompanyName,
  HeaderStyled,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledNotification,
  UserRoleStyled,
  Wrapper,
} from './Header.styled';
import UserInfo from './UserInfo';

const Header: FC = () => {
  const { formatMessage } = useIntl();
  const currentUser = useUserConfig();

  return (
    <HeaderStyled>
      <Box>
        <CompanyName>name</CompanyName>
      </Box>
      <Wrapper>
        <UserRoleStyled>{currentUser?.role}</UserRoleStyled>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={formatMessage({
              defaultMessage: 'Пошук',
              description: 'CabinetHeader: search placeholder',
            })}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <StyledNotification />
        <UserInfo />
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
