import React, { FC, ReactNode } from 'react';

interface CabinetLayoutProps {
  children: ReactNode;
}

export const CabinetLayout: FC<CabinetLayoutProps> = ({ children }) => {
  return (
    <div>
      Cabinet
      {children}
    </div>
  );
};
