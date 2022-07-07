import React, { FC, ReactNode } from 'react';

interface LoginLogoutButtonProps {
  children: ReactNode;
}

export const LoginLogoutButton: FC<LoginLogoutButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};
