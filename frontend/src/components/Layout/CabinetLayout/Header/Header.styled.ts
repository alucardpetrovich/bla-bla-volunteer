import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import InputBase from '@mui/material/InputBase';
import styled from 'styled-components';

import HeaderBcg from '../assets/cabinet-header.png';

export const HeaderStyled = styled.header`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: ${p => p.theme.palette.info.main};
  align-items: center;
  padding: ${p => p.theme.spacing(0, 4)};
  min-height: ${p => p.theme.spacing(15)};
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const UserRoleStyled = styled.p`
  ${p => p.theme.font('body1')}
`;

export const Search = styled.div`
  position: relative;
  border: 1px solid ${p => p.theme.palette.primary.main};
  border-radius: 5px;
  background-color: ${p => p.theme.palette.common.white};
  color: ${p => p.theme.palette.primary.main};
  width: 360px;
  font-size: 14px;
`;

export const SearchIconWrapper = styled.div`
  padding: ${p => p.theme.spacing(0, 2)};
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNotification = styled(NotificationsNoneOutlinedIcon)``;

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

export const Box = styled.div`
  min-height: 120px;
  min-width: 250px;

  display: flex;
  align-items: center;

  padding-left: ${p => p.theme.spacing(4)};
  padding-right: ${p => p.theme.spacing(19.5)};

  background-color: ${p => p.theme.palette.primary.main};
  background: url('${HeaderBcg}') no-repeat center;
`;

export const CompanyName = styled.h3`
  ${p => p.theme.font('h3_900')}
  text-transform: uppercase;
`;
