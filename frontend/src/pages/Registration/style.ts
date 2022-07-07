import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledTitleDiv = styled.div`
  margin-bottom: 55px;
`;

export const RegisterFormContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterFormWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RegisterTitle = styled.h3`
  margin-bottom: 65px;
`;

export const AlreadyRegisteredLink = styled(Link)`
  color: #8c8e91;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
`;

export const StyledText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  color: #8c8e91;
  margin-bottom: 21px;
  width: 320px;
`;
export const StyledInnerText = styled.span`
  color: #1546f5;
`;
