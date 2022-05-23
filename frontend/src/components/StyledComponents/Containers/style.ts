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
  /* background-color: var(--fifth-blue); */
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled(Container)<IContainer>`
  /* background-color: var(--fourth-blue); */
  padding-top: 40px;
`;

export const MainContainer = styled(Container)<IContainer>`
  flex: 1;
  /* background-color: var(--third-jeans); */
  padding: 100px 0px 200px;
`;

export const FooterContainer = styled(Container)<IContainer>`
  /* background-color: var(--secondary-blue);  */
  padding-bottom: 100px;
`;
