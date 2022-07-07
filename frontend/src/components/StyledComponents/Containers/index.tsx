import React from 'react';

import {
  ContainerTypes,
  ContentContainer,
  FooterContainer,
  HeaderAuthContainer,
  HeaderContainer,
  IContainer,
  MainContainer,
} from './style';

type StyledContainersDict = {
  [key in ContainerTypes]: JSX.Element;
};

const Container: React.FC<IContainer> = ({ children, ...props }) => {
  const StyledContainer: StyledContainersDict = {
    content: <ContentContainer {...props}>{children}</ContentContainer>,
    header: <HeaderContainer {...props}>{children}</HeaderContainer>,
    headerAuth: <HeaderAuthContainer {...props}>{children}</HeaderAuthContainer>,
    main: <MainContainer {...props}>{children}</MainContainer>,
    footer: <FooterContainer {...props}>{children}</FooterContainer>,
  };

  return StyledContainer[props.tag];
};

export default Container;
