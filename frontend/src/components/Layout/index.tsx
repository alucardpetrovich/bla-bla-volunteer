import React from 'react';
import Header from '../Header';
import * as S from './style';

interface ILayout {
  children?: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <S.SiteContainer>
      {/* GlobalSTYPE here */}
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
