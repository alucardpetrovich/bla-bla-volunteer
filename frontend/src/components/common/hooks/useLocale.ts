import { useParams } from 'react-router';

export const useLocale = () => {
  const params = useParams();
  const locale = params?.locale || process.env.REACT_APP_DEFAULT_LOCALE || 'uk';

  return { locale };
};
