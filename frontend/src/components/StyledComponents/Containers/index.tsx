import React from 'react';
import {
  IContainer,
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  MainContainer,
} from './style';

const StyledContainer: React.FC<IContainer> = ({ tag, children, ...props }) => {
  const Container = {
    content: <ContentContainer {...props}>{children}</ContentContainer>,
    header: <HeaderContainer {...props}>{children}</HeaderContainer>,
    main: <MainContainer {...props}>{children}</MainContainer>,
    footer: <FooterContainer {...props}>{children}</FooterContainer>,
  };
  return Container[tag];
};

export default StyledContainer;
