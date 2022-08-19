import { makeUrl } from '@ui-kit';
import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useLocale } from '../../hooks/useLocale';

interface RedirectProps {
  pathname: string;
  params?: Record<string, string | null>;
}

export const Redirect: FC<RedirectProps> = ({ pathname, params }) => {
  const { locale } = useLocale();

  const path = makeUrl(pathname, { locale, ...params });

  return <Navigate to={path} replace={true} />;
};
