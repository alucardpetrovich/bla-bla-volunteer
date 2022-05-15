import { useIntl } from 'react-intl';

export const useFormatMessage = () => {
  const intl = useIntl();
  const f = intl.formatMessage;
  return { f };
};
