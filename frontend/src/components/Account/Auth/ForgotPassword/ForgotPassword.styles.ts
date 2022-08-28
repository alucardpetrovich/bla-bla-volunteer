import styled from 'styled-components';

export const ForgotPasswordWrapper = styled.div`
  width: 100%;
  max-width: 320px;
`;
export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordTitle = styled.h3`
  ${p => p.theme.font('h3')};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const ForgotPasswordText = styled.p`
  ${p => p.theme.font('body3')};
  color: ${p => p.theme.palette.primary.main};
  width: 450px;
  margin-bottom: ${p => p.theme.spacing(4.5)};
`;
