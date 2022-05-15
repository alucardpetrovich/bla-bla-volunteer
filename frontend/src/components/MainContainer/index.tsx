import styled from 'styled-components';

type IMainContainer = {
  children: any;
};

const StyledContainer = styled.div`
  background-color: var(--new-sky-S1);

  @media (max-width: 699px) {
    padding: 0px 20px;
  }
  @media (min-width: 700px) and (max-width: 1023px) {
    padding: 0px 70px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 0px 100px;
  }
  @media (min-width: 1440px) {
    padding: 0px 200px;
  }
`;

const MainContainer = ({ children }: IMainContainer) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default MainContainer;
