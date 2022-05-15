import { useFormatMessage, useMedia } from '../../hooks';
import { homeI18n } from '../../intl/content';
import useRoutesConstants from '../../hooks/useRoutes';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Registration from '../Registration';

export const App = () => {
  const routes = useRoutesConstants();
  const f = useFormatMessage;
  // const { ONLY_TABL_TEST } = useMedia();
  // console.log('ONLY_TABL_TEST', ONLY_TABL_TEST);

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
