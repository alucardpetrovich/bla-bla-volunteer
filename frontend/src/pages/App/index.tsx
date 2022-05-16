import { useFormatMessage } from '../../hooks';
import Layout from '../../components/Layout';

export const App = () => {
  const f = useFormatMessage;

  return <Layout />;
};

export default App;
