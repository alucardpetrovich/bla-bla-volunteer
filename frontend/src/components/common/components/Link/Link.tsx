import { makeUrl } from '@ui-kit';
import React, { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { useLocale } from '../../hooks/useLocale';

interface LinkProps extends NavLinkProps {
  params?: Record<string, string | null>;
}

export const Link: FC<LinkProps> = ({ children, to, params, ...props }) => {
  const { locale } = useLocale();
  const isToString = typeof to === 'string';

  return (
    <NavLink key={locale} to={isToString ? makeUrl(to, { locale, ...params }) : to} {...props}>
      {children}
    </NavLink>
  );
};
