import React from 'react';
import Header from '../Header';
import GlobalStyle from '../../utils/styles/global';
import * as S from './style';

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
