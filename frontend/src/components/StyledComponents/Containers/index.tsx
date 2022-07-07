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
    content: (
      <ContentContainer tag={tag} {...props}>
        {children}
      </ContentContainer>
    ),
    header: (
      <HeaderContainer tag={tag} {...props}>
        {children}
      </HeaderContainer>
    ),
    headerAuth: (
      <HeaderAuthContainer tag={tag} {...props}>
        {children}
      </HeaderAuthContainer>
    ),
    main: (
      <MainContainer tag={tag} {...props}>
        {children}
      </MainContainer>
    ),
    footer: (
      <FooterContainer tag={tag} {...props}>
        {children}
      </FooterContainer>
    ),
  };

  return tag && tag in StyledContainer ? StyledContainer[tag] : StyledContainer['content'];
};

export default Container;
