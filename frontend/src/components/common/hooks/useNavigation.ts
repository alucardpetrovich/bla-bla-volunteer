import { makeUrl } from '@ui-kit';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { useLocale } from './useLocale';

export const useNavigation = (pathname: string, params?: Record<string, string | null>) => {
  const { locale } = useLocale();
  const navigate = useNavigate();

  return useCallback(() => {
    const path = makeUrl(pathname, { locale, ...params });
    return navigate(path);
  }, [locale, navigate, params, pathname]);
};
