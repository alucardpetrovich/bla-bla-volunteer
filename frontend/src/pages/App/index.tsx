import { useFormatMessage } from '../../hooks';
import { homeI18n } from '../../intl/content';
import useRoutesConstants from '../../hooks/useRoutes';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

export const App = () => {
  const routes = useRoutesConstants();
  const f = useFormatMessage;

  return (
    <div>
      <Layout>Hello</Layout>
    </div>
  );
};

export default App;
