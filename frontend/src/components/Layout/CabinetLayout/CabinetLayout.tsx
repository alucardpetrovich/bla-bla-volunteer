import React, { FC, ReactNode } from 'react';

import { ContentStyled, Wrapper } from './CabinetLayout.styled';
import Header from './Header/Header';
import UserMenu from './UserMenu/UserMenu';

interface CabinetLayoutProps {
  children: ReactNode;
}

export const CabinetLayout: FC<CabinetLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <UserMenu />
        <ContentStyled>{children}</ContentStyled>
      </Wrapper>
    </>
  );
};
