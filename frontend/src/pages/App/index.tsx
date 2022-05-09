import { useFormatMessage } from '../../hooks';
import { homeI18n } from '../../intl/content';
import useRoutesConstants from '../../hooks/useRoutes';
import Header from '../../components/Header';

export const App = () => {
  const routes = useRoutesConstants();
  const f = useFormatMessage;

  return (
    <div>
      <h1>{f(homeI18n.title)}</h1>
      <Header />
      <h2>App</h2>
      {routes}
    </div>
  );
};

export default App;
