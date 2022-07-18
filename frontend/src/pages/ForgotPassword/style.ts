import styled from 'styled-components';

export const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordTitle = styled.h3`
  font-family: 'Inter';
  ${p => p.theme.font('h3')};
  margin-bottom: ${p => p.theme.spacing(7)};
`;

export const ForgotPasswordText = styled.p`
  font-family: 'Inter';
  ${p => p.theme.font('body3')};
  color: ${p => p.theme.palette.primary.main};
  width: 450px;
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
