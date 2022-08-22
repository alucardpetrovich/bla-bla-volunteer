import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  padding: ${p => p.theme.spacing(16, 10, 12.5)};
  max-width: 1280px;
  margin: 0 auto;
  flex-grow: 1;
`;
