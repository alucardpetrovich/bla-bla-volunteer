import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${p => p.theme.font('h2')};
  flex-grow: 1;
`;
