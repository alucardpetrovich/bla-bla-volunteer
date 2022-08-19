import styled from 'styled-components';

import BackgroundImage from './assets/background.jpg';

export const Wrapper = styled.header`
  min-height: 806px;
  background: url('${BackgroundImage}') no-repeat center;
  background-size: cover;
  padding: ${p => p.theme.spacing(5, 10, 11.5)};
`;

export const Title = styled.h1`
  ${p => p.theme.font('title')};
  max-width: 630px;
  margin: ${p => p.theme.spacing(24, 0, 25, 'auto')};
`;

export const RegistrationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 45px;
`;

export const RegistrationLabel = styled.p`
  max-width: 325px;
  ${p => p.theme.font('body8')};
`;

export const RegistrationLink = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(2.5)};
  ${p => p.theme.font('body8')};
  color: ${p => p.theme.palette.common.black};
  border: 3px solid ${p => p.theme.palette.common.black};
  min-width: 260px;
`;
