import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 505px;
`;

export const Title = styled.h2`
  ${p => p.theme.font('h2')};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
