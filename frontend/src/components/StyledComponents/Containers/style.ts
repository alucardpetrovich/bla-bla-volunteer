import styled from 'styled-components';

type ContainerTypes = 'content' | 'header' | 'headerAuth' | 'main' | 'footer';

export interface IContainer {
  tag: ContainerTypes;
  children: React.ReactNode;
  isAuth?: boolean;
  isShowHeading?: boolean;
}

const Container = styled.div`
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 280px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 728px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 960px;
  }

  @media (min-width: 1440px) {
    width: 1280px;
  }
`;

export const ContentContainer = styled.div<IContainer>`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled(Container)<IContainer>`
  display: flex;
  flex-direction: column;
  height: ${({ isAuth, isShowHeading }) => (isAuth || isShowHeading ? '' : '100vh')};
  justify-content: space-between;
  padding: ${({ isAuth, isShowHeading }) => (isAuth || isShowHeading ? '' : '40px 0px 100px')};
  position: ${({ isAuth, isShowHeading }) => (isAuth || isShowHeading) && 'relative'};
  top: ${({ isAuth, isShowHeading }) => (isAuth || isShowHeading) && '20%'};
`;

export const HeaderAuthContainer = styled.div<IContainer>`
  display: flex;
  background-color: yellow;
`;

export const MainContainer = styled(Container)<IContainer>`
  flex: 1;
  padding: 100px 0px 200px;
`;

export const FooterContainer = styled(Container)<IContainer>`
  padding-bottom: 100px;
`;
