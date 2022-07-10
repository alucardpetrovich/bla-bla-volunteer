import { FC, ReactNode } from 'react';

import { IText, TextB1, TextB2, TextB3, TextB4, TextB5, TextB6, TextB7 } from './style';

const StyledText = {
  b1: TextB1,
  b2: TextB2,
  b3: TextB3,
  b4: TextB4,
  b5: TextB5,
  b6: TextB6,
  b7: TextB7,
};

const Text: FC<IText & { children: ReactNode }> = ({ color, tag = 'b1', children, ...props }) => {
  const TargetText = StyledText[tag];

  return (
    <TargetText color={color} {...props}>
      {children}
    </TargetText>
  );
};

export default Text;
