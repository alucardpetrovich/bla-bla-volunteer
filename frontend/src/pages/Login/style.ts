import styled from 'styled-components';

export const ForgotPasswordButton = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.theme.spacing(1.75)};
  line-height: 100%;
  color: ${p => p.theme.palette.primary.main};
  background-color: ${p => p.theme.palette.common.white};
  border: none;
  margin-bottom: ${p => p.theme.spacing(2.5)};
  padding: 0;
`;

export const LoginFormContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginFormWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LoginTitle = styled.h3`
  margin-bottom: ${p => p.theme.spacing(7)};
`;
