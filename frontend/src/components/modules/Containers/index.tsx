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
    content: <ContentContainer {...props}>{children}</ContentContainer>,
    header: <HeaderContainer {...props}>{children}</HeaderContainer>,
    headerAuth: <HeaderAuthContainer {...props}>{children}</HeaderAuthContainer>,
    main: <MainContainer {...props}>{children}</MainContainer>,
    footer: <FooterContainer {...props}>{children}</FooterContainer>,
  };
  // FIXME: Пофіксить. tag опціональний. Коли буде undefined тоді впаде апка?
  // eslint-disable-next-line
  // @ts-ignore
  return StyledContainer[tag];
};

export default Container;
