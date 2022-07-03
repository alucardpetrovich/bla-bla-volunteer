import styled from 'styled-components';

export const SiteContainer = styled.div`
  width: 100vw;
  display: flex;
  position: relative;
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  color: white;
  max-height: 5.75rem;
`;

export const MainContainer = styled(Container)`
  flex: 1;
  align-items: start;
`;
