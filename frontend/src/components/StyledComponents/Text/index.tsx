import React from 'react';

import { IText, TextB1, TextB2, TextB3, TextB4, TextB5, TextB6, TextB7 } from './style';

const Text: React.FC<IText> = ({ color, tag, textAlign, children, ...props }) => {
  const StyledText: Record<string, JSX.Element> = {
    b1: (
      <TextB1 tag={tag} color={color} textAlign={textAlign} {...props}>
        {children}
      </TextB1>
    ),
    b2: (
      <TextB2 tag={tag} color={color} textAlign={textAlign} {...props}>
        {children}
      </TextB2>
    ),
    b3: (
      <TextB3 tag={tag} color={color} textAlign={textAlign} {...props}>
        {children}
      </TextB3>
    ),
    b4: (
      <TextB4 tag={tag} color={color} textAlign={textAlign} {...props}>
        {children}
      </TextB4>
    ),
    b5: (
      <TextB5 tag={tag} color={color} textAlign={textAlign} {...props}>
        {children}
      </TextB5>
    ),
    b6: (
      <TextB6 tag={tag} color={color} textAlign={textAlign} {...props}>
        {children}
      </TextB6>
    ),
    b7: (
      <TextB7 tag={tag} color={color} textAlign={textAlign} {...props}>
        {children}
      </TextB7>
    ),
  };
  return StyledText[tag];
};

export default Text;
