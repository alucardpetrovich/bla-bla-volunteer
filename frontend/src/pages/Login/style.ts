import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ForgotPasswordLink = styled(Link)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #93a9d2;
  margin-bottom: 21px;
`;

export const ForgotPasswordButton = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #93a9d2;
  background-color: #fff;
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
