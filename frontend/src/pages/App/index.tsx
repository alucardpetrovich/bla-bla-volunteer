import { useFormatMessage } from '../../hooks';
import useRoutesConstants from '../../hooks/useRoutes';
import Layout from '../../components/Layout';

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
