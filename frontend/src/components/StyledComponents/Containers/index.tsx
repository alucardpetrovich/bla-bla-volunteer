import React from 'react';

import { ContentContainer, FooterContainer, HeaderContainer, IContainer, MainContainer } from './style';

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
    main: (
      <main>
        <MainContainer tag={tag} {...props}>
          {children}
        </MainContainer>
      </main>
    ),
    footer: (
      <footer>
        <FooterContainer tag={tag} {...props}>
          {children}
        </FooterContainer>
      </footer>
    ),
  };

  return StyledContainer[tag];
};

export default Container;
