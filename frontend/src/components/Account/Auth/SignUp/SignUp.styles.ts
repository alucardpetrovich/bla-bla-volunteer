import { Button as MuiButton } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
`;

export const Title = styled.h3`
  ${p => p.theme.font('h3')};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const NickNameWarning = styled.p`
  ${p => p.theme.font('body6')};
  color: ${p => p.theme.palette.grey[500]};
  margin-bottom: ${p => p.theme.spacing(3)};
  margin-top: ${p => p.theme.spacing(-1)};
  width: 320px;
`;

export const StyledText = styled.p`
  ${p => p.theme.font('body6')};
  color: ${p => p.theme.palette.grey[500]};
  margin-bottom: ${p => p.theme.spacing(4)};
  width: 320px;
`;
export const StyledInnerText = styled.a`
  color: ${p => p.theme.palette.info.blue};
`;

export const Button = styled(MuiButton)`
  min-width: 230px;

  :first-of-type {
    margin-bottom: ${p => p.theme.spacing(4)};
  }
`;
