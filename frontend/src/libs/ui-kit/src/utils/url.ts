import { generatePath } from 'react-router';

// TODO: need refactor
export const makeUrl = (path: string, params?: Partial<Record<string, string | null>>) => {
  const paramsLocale = params?.locale || '';
  const locale = paramsLocale || process.env.REACT_APP_DEFAULT_LOCALE || 'uk';

  const pathname = path.includes(paramsLocale) ? path.replace(paramsLocale, '') : path;
  const p = pathname.startsWith('/') ? pathname.slice(1) : pathname;

  return `/${generatePath(p ? `:locale/${p}` : ':locale', {
    locale,
    ...params,
  })}`;
};
