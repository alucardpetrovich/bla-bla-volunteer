import { PasswordField as MuiPasswordField } from '@ui-kit';
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
  margin-bottom: ${p => p.theme.spacing(5)};
  ${p => p.theme.font('h3')};
`;

export const PasswordField = styled(MuiPasswordField)`
  margin-bottom: ${p => p.theme.spacing(2.5)};
`;

export const StyledLink = styled.span`
  display: block;
  ${p => p.theme.font('body3')};
  color: ${p => p.theme.palette.primary.main};
  background-color: ${p => p.theme.palette.common.white};
  border: none;
  margin-bottom: ${p => p.theme.spacing(3)};
  padding: 0;
`;
