import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  padding: ${p => p.theme.spacing(10, 10, 12.5)};
  max-width: 1010px;
  margin: ${p => p.theme.spacing(0, 'auto')};
  flex-grow: 1;
`;
