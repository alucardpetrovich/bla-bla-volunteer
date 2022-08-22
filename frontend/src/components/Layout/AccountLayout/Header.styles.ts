import styled from 'styled-components';

import HeaderBackground from './assets/header.jpg';

export const Wrapper = styled.header`
  min-height: 136px;
  background: url('${HeaderBackground}') no-repeat center;
  background-size: cover;
  padding: ${p => p.theme.spacing(5, 10)};
`;
