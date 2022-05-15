import React from 'react';
import Header from '../Header';
import * as S from './style';
import { GlobalStyle } from '../../../utils/styles';

interface ILayout {
  children?: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <S.SiteContainer>
      <GlobalStyle />
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <S.MainContainer>
        <main style={{ textAlign: 'center' }}>{children}</main>
      </S.MainContainer>
    </S.SiteContainer>
  );
};

export default Layout;
