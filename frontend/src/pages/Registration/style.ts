import styled from 'styled-components';

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
  ${p => p.theme.font('h3')};
  margin-bottom: ${p => p.theme.spacing(7)};
`;

export const StyledText = styled.p`
  ${p => p.theme.font('body6')};
  color: ${p => p.theme.palette.grey[500]};
  margin-bottom: ${p => p.theme.spacing(2.5)};
  width: 320px;
`;
export const StyledInnerText = styled.span`
  color: ${p => p.theme.palette.info.blue};
`;
