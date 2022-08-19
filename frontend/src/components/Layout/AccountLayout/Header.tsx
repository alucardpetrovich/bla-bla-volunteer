import React, { FC } from 'react';

import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import { Wrapper } from './Header.styles';

export const Header: FC = () => {
  return (
    <Wrapper>
      <HeaderNavigation />
    </Wrapper>
  );
};
