import React from 'react';
import { HeaderH1, HeaderH2, HeaderH3, IHeader } from './style';

const StyledHeader: React.FC<IHeader> = ({
  color,
  tag,
  isBold = true,
  textAlign,
  children,
  ...props
}) => {
  const Header = {
    h1: (
      <HeaderH1
        isBold={isBold}
        fontWeight={isBold ? 900 : 400}
        color={color}
        {...props}
      >
        {children}
      </HeaderH1>
    ),
    h2: (
      <HeaderH2
        isBold={isBold}
        fontWeight={isBold ? 900 : 400}
        color={color}
        {...props}
      >
        {children}
      </HeaderH2>
    ),
    h3: (
      <HeaderH3
        isBold={isBold}
        fontWeight={isBold ? 900 : 400}
        textAlign={textAlign}
        color={color}
        {...props}
      >
        {children}
      </HeaderH3>
    ),
  };

  return Header[tag];
};

export default StyledHeader;