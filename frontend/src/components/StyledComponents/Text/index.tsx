import React from 'react';
import { TextP } from './style';

type TextTypes = 'text' | 'link';

interface IText {
  color?: string;
  tag?: TextTypes;
  isBold?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: any;
  lineHeight?: any;
  children: any;
  href?: string;
}

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
