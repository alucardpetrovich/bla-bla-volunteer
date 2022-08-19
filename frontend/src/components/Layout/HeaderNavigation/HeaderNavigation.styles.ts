import styled from 'styled-components';

export const NavigationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: ${p => p.theme.spacing(17.5)};
`;

export const CompanyName = styled.p`
  ${p => p.theme.font('h1_900')};
  text-transform: uppercase;
`;
