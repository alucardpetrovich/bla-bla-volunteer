import React from 'react';

import {
  ContentContainer,
  FooterContainer,
  HeaderAuthContainer,
  HeaderContainer,
  IContainer,
  MainContainer,
} from './style';

const Container: React.FC<IContainer & { children: React.ReactNode }> = ({ tag, children, ...props }) => {
  const StyledContainer = {
    content: <ContentContainer {...props}>{children}</ContentContainer>,
    header: <HeaderContainer {...props}>{children}</HeaderContainer>,
    headerAuth: <HeaderAuthContainer {...props}>{children}</HeaderAuthContainer>,
    main: <MainContainer {...props}>{children}</MainContainer>,
    footer: <FooterContainer {...props}>{children}</FooterContainer>,
  };

  return tag && tag in StyledContainer ? StyledContainer[tag] : StyledContainer['content'];
};

export default Container;
