import React from 'react';

import {
  ContentContainer,
  FooterContainer,
  HeaderAuthContainer,
  HeaderContainer,
  IContainer,
  MainContainer,
} from './style';

const Container: React.FC<IContainer> = ({ tag, children, ...props }) => {
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

  return StyledContainer[tag];
};

export default Container;
