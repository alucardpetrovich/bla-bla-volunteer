import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  flex-grow: 1;
  display: flex;
`;

export const ContentContainer = styled.div`
  padding: ${p => p.theme.spacing(0, 4)};
`;
