import React from 'react';

import { IText, TextB1, TextB2, TextB3, TextB4, TextB5, TextB6, TextB7 } from './style';

export const Text: React.FC<IText & { children: React.ReactNode }> = ({
  color,
  tag,
  textAlign,
  children,
  ...props
}) => {
  const StyledText: Record<string, JSX.Element> = {
    b1: (
      <TextB1 tag={tag} textAlign={textAlign} color={color} {...props}>
        {children}
      </TextB1>
    ),
    b2: (
      <TextB2 tag={tag} textAlign={textAlign} color={color} {...props}>
        {children}
      </TextB2>
    ),
    b3: (
      <TextB3 tag={tag} textAlign={textAlign} color={color} {...props}>
        {children}
      </TextB3>
    ),
    b4: (
      <TextB4 tag={tag} textAlign={textAlign} color={color} {...props}>
        {children}
      </TextB4>
    ),
    b5: (
      <TextB5 tag={tag} textAlign={textAlign} color={color} {...props}>
        {children}
      </TextB5>
    ),
    b6: (
      <TextB6 tag={tag} textAlign={textAlign} color={color} {...props}>
        {children}
      </TextB6>
    ),
    b7: (
      <TextB7 tag={tag} textAlign={textAlign} color={color} {...props}>
        {children}
      </TextB7>
    ),
  };
  return tag && tag in StyledText ? StyledText[tag] : StyledText['b1'];
};
