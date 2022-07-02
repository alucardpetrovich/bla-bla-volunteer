import React, { FC, ReactNode } from 'react';

interface TestButtonProps {
  children: ReactNode;
}

export const TestButton: FC<TestButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};
