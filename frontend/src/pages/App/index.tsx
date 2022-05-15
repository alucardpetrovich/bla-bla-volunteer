import useRoutesConstants from '../../hooks/useRoutes';
import Layout from '../../components/Layout';

export const App = () => {
  const routes = useRoutesConstants();

  return (
    <>
      <Layout>{routes}</Layout>
    </>
  );
};

export default App;
