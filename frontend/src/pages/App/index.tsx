import { IntlProvider } from 'react-intl';
import Layout from 'src/components/Layout';
import { useAppSelector } from 'src/hooks';
import { getLang } from 'src/store/lang/langSelectors';

import messages from '../../locale/list.json';

export const App = () => {
  const lang = useAppSelector(getLang);
  // FIXME: пофіксить тайпінги
  // eslint-disable-next-line
  // @ts-ignore
  const m = messages[lang];
  return (
    <IntlProvider locale={lang} messages={m} defaultLocale="uk">
      <Layout />
    </IntlProvider>
  );
};

export default App;
