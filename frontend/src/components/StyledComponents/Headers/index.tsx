import { FC, ReactNode } from 'react';

import { HeaderH2, HeaderH3, HeaderH4, HeaderH5, IHeader } from './style';

const StyledHeader = {
  h2: HeaderH2,
  h3: HeaderH3,
  h4: HeaderH4,
  h5: HeaderH5,
};

const Header: FC<IHeader & { children: ReactNode }> = ({ color, tag = 'h2', textAlign, children, ...props }) => {
  const TargetHeader = StyledHeader[tag];

  return (
    <TargetHeader textAlign={textAlign} color={color} {...props}>
      {children}
    </TargetHeader>
  );
};

export default Header;
