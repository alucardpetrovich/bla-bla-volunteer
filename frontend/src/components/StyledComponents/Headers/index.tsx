import React from 'react';

import { HeaderH2, HeaderH3, HeaderH4, HeaderH5, IHeader } from './style';

const Header: React.FC<IHeader> = ({ color, textAlign, children, ...props }) => {
  const StyledHeader = {
    h2: (
      <HeaderH2 textAlign={textAlign} color={color} {...props}>
        {children}
      </HeaderH2>
    ),
    h3: (
      <HeaderH3 textAlign={textAlign} color={color} {...props}>
        {children}
      </HeaderH3>
    ),
    h4: (
      <HeaderH4 textAlign={textAlign} color={color} {...props}>
        {children}
      </HeaderH4>
    ),
    h5: (
      <HeaderH5 textAlign={textAlign} color={color} {...props}>
        {children}
      </HeaderH5>
    ),
  };

  return StyledHeader[props.tag];
};

export default Header;
