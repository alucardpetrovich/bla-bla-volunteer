import React from 'react';
import { IContainer, ContentContainer, FooterContainer, HeaderContainer, MainContainer } from './style';

const Container: React.FC<IContainer> = ({ tag, children, ...props }) => {
  const StyledContainer = {
    content: <ContentContainer {...props}>{children}</ContentContainer>,
    header: <HeaderContainer {...props}>{children}</HeaderContainer>,
    main: (
      <main>
        <MainContainer {...props}>{children}</MainContainer>
      </main>
    ),
    footer: (
      <footer>
        <FooterContainer {...props}>{children}</FooterContainer>
      </footer>
    ),
  };
  return StyledContainer[tag];
};

export default Container;
