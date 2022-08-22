import React, { FC, ReactNode } from 'react';

import { Header } from './Header';
import { Wrapper } from './MainLayout.styles';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};
