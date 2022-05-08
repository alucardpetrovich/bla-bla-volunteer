import i18n from './i18n';

export const ContentPage = intl => ({
  name: 'teamGroup',
  teamCards: intl.formatMessage(i18n['teamGroup-firstBlock-frontFace-link']),
});
