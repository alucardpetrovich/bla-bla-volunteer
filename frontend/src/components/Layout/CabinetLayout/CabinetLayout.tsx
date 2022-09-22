import React, { FC, ReactNode } from 'react';

import { ContentContainer, Wrapper } from './CabinetLayout.styled';
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
        <ContentContainer>{children}</ContentContainer>
      </Wrapper>
    </>
  );
};
