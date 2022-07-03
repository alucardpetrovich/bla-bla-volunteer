import React from 'react';

import { HeadingH2, HeadingH3, HeadingH4, HeadingH5, IHeading } from './style';

const Heading: React.FC<IHeading> = ({ color, tag, textAlign, children, ...props }) => {
  const StyledHeading = {
    h2: (
      <HeadingH2 textAlign={textAlign} color={color} {...props}>
        {children}
      </HeadingH2>
    ),
    h3: (
      <HeadingH3 textAlign={textAlign} color={color} {...props}>
        {children}
      </HeadingH3>
    ),
    h4: (
      <HeadingH4 textAlign={textAlign} color={color} {...props}>
        {children}
      </HeadingH4>
    ),
    h5: (
      <HeadingH5 textAlign={textAlign} color={color} {...props}>
        {children}
      </HeadingH5>
    ),
  };

  // FIXME: Пофіксить. tag опціональний. Коли буде undefined тоді впаде апка?
  // eslint-disable-next-line
  // @ts-ignore
  return StyledHeading[tag];
};

export default Heading;
