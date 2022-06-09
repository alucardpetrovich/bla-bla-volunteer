import styled from 'styled-components';

type ContainerTypes = 'content' | 'header' | 'main' | 'footer';

export interface IContainer {
  tag?: ContainerTypes;
  children: any;
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
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MainContainer = styled(Container)<IContainer>`
  flex: 1;
  padding: 100px 0px 200px;
`;

export const FooterContainer = styled(Container)<IContainer>`
  padding-bottom: 100px;
`;
