import { FC, ReactNode } from 'react';

import {
  ContentContainer,
  FooterContainer,
  HeaderAuthContainer,
  HeaderContainer,
  IContainer,
  MainContainer,
} from './style';

const StyledContainer = {
  content: ContentContainer,
  header: HeaderContainer,
  headerAuth: HeaderAuthContainer,
  main: MainContainer,
  footer: FooterContainer,
};

const Container: FC<IContainer & { children: ReactNode }> = ({ tag = 'content', children, ...props }) => {
  const TargetContainer = StyledContainer[tag];

  return <TargetContainer {...props}>{children}</TargetContainer>;
};

export default Container;
