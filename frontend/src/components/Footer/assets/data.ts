import { useIntl } from 'react-intl';

export const FooterNavigation = () => {
  const { formatMessage } = useIntl();

  const data = {
    footerNavigation: [
      {
        link: formatMessage({
          defaultMessage: 'Про проект',
          description: 'Footer: footer_navLink_1',
        }),
        path: '/',
      },

      {
        link: formatMessage({
          defaultMessage: 'Сервіси',
          description: 'Footer: footer_navLink_2',
        }),
        path: '/',
      },
      {
        link: formatMessage({
          defaultMessage: 'Безпека',
          description: 'Footer: footer_navLink_3',
        }),
        path: '/',
      },
    ],
    subscription: formatMessage({
      defaultMessage: 'Company, 2022. All rights reserved',
      description: 'Footer: footer_subscription',
    }),
  };
  return data;
};
