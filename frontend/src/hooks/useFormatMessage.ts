import { useIntl } from 'react-intl';

export const useFormatMessage = data => {
  const intl = useIntl();
  const f = intl.formatMessage(data);
  return f;
};
