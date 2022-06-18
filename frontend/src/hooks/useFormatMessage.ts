import { useIntl } from 'react-intl';

// FIXME: я буду робити переклади. Це не юзаєм. Я випилю його
export const useFormatMessage = () => {
  const intl = useIntl();
  const f = intl.formatMessage;
  return { f };
};
