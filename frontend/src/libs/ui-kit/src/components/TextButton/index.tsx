import React, { FC, ReactNode } from 'react';

import { StyledTextButton } from './style';

interface TextButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const TextButton: FC<TextButtonProps> = ({ children, onClick }) => {
  return <StyledTextButton onClick={onClick}>{children}</StyledTextButton>;
};
