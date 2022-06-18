import React from 'react';

import { ContentContainer, FooterContainer, HeaderContainer, IContainer, MainContainer } from './style';

const Container: React.FC<IContainer> = ({ tag, children, ...props }) => {
  const StyledContainer = {
    content: <ContentContainer {...props}>{children}</ContentContainer>,
    header: <HeaderContainer {...props}>{children}</HeaderContainer>,
    main: <MainContainer {...props}>{children}</MainContainer>,
    footer: <FooterContainer {...props}>{children}</FooterContainer>,
  };
  // FIXME: Пофіксить. tag опціональний. Коли буде undefined тоді впаде апка?
  // eslint-disable-next-line
  // @ts-ignore
  return StyledContainer[tag];
};

export default Container;
