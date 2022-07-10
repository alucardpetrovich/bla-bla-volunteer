import React from 'react';

import { HeadingH2, HeadingH3, HeadingH4, HeadingH5, IHeading } from './style';

export const Heading: React.FC<IHeading & { children: React.ReactNode }> = ({
  color,
  tag,
  textAlign,
  children,
  ...props
}) => {
  const StyledHeading = {
    h2: (
      <HeadingH2 tag={tag} as="h2" textAlign={textAlign} color={color} {...props}>
        {children}
      </HeadingH2>
    ),
    h3: (
      <HeadingH3 tag={tag} as="h3" textAlign={textAlign} color={color} {...props}>
        {children}
      </HeadingH3>
    ),
    h4: (
      <HeadingH4 tag={tag} as="h4" textAlign={textAlign} color={color} {...props}>
        {children}
      </HeadingH4>
    ),
    h5: (
      <HeadingH5 tag={tag} as="h5" textAlign={textAlign} color={color} {...props}>
        {children}
      </HeadingH5>
    ),
  };

  return tag && tag in StyledHeading ? StyledHeading[tag] : StyledHeading['h2'];
};
