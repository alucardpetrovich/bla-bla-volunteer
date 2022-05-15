import { useFormatMessage } from '../../hooks';
import { homeI18n } from '../../intl/content';
import useRoutesConstants from '../../hooks/useRoutes';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Registration from '../Registration';

export const App = () => {
  const routes = useRoutesConstants();
  const f = useFormatMessage;

  return (
    <div>
      <Layout>Hello</Layout>
      <Registration />
    </div>
  );
};

export default App;
