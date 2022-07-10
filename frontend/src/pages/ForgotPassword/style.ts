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
  margin-bottom: ${p => p.theme.spacing(7)};
`;

export const ForgotPasswordText = styled.p`
  font-family: 'Inter';
  font-size: ${p => p.theme.spacing(1.75)};
  color: ${p => p.theme.palette.primary.main};
  width: 450px;
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
