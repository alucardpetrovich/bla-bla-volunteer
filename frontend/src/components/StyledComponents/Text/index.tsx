import React from 'react';
import { IText, TextP } from './style';

const StyledText: React.FC<IText> = ({
  color,
  tag = 'text',
  isBold = false,
  textAlign,
  href,
  children,
  ...props
}) => {
  const Text = {
    text: (
      <TextP
        color={color}
        isBold={isBold}
        fontWeight={isBold ? 900 : 400}
        {...props}
      >
        {children}
      </TextP>
    ),
    link: (
      <TextP
        color={color}
        isBold={isBold}
        fontWeight={isBold ? 900 : 400}
        {...props}
      >
        <a href={href}>{children}</a>
      </TextP>
    ),
  };
  return Text[tag];
};

export default StyledText;
