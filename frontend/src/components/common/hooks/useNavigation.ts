import { makeUrl } from '@ui-kit';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { useLocale } from './useLocale';

export const useNavigation = (pathname: string, params?: Record<string, string | null>, navigateParams?: object) => {
  const { locale } = useLocale();
  const navigate = useNavigate();

  return useCallback(() => {
    const path = makeUrl(pathname, { locale, ...params });
    return navigate(path, navigateParams);
  }, [locale, navigate, navigateParams, params, pathname]);
};
