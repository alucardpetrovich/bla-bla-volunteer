import React from 'react';
import Header from '../Header';
import { Global } from '../../utils/styles';
import { homeI18n } from '../../intl/content';
import {
  MainStyledHeader,
  SecondaryStyledHeader,
  Text,
} from '../StyledComponents';
import MainContainer from '../StyledComponents/MainContainer';
import { useFormatMessage } from '../../hooks';

interface ILayout {
  children?: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const f = useFormatMessage;

  return (
    // <S.SiteContainer>
    //   <GlobalStyle />
    //   <S.HeaderContainer>
    //     <Header />
    //   </S.HeaderContainer>
    //   <S.MainContainer>
    //     <main style={{ textAlign: 'center' }}>{children}</main>
    //   </S.MainContainer>
    // </S.SiteContainer>
    <>
      <Global />
      <MainContainer>
        <h1>{f(homeI18n.title)}</h1>
        <Header />
        <MainStyledHeader>Main Styled Header</MainStyledHeader>
        <SecondaryStyledHeader>Secondary Styled Header</SecondaryStyledHeader>
        <Text>
          Regular styled text. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iusto vitae necessitatibus veritatis aliquid optio
          possimus voluptatem deserunt corporis accusantium omnis,
          exercitationem delectus eum natus ratione. Eum doloremque maxime
          ducimus quo!
        </Text>
        {children}
      </MainContainer>
    </>
  );
};

export default Layout;
