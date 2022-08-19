import React, { FC, ReactNode } from 'react';

import { Wrapper } from './Account.styles';
import { Header } from './Header';

interface AccountLayoutProps {
  children: ReactNode;
}

export const AccountLayout: FC<AccountLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};
