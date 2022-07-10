import styled from 'styled-components';

export const ForgotPasswordButton = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${p => p.theme.palette.primary.main};
  background-color: ${p => p.theme.palette.common.white};
  border: none;
  margin-bottom: 21px;
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
  margin-bottom: 65px;
`;
