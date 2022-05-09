import { useIntl } from 'react-intl';
import Header from '../../components/Header';
import useRoutesConstants from '../../hooks/useRoutes';
import { ContentPage } from './contentPage';

export const App = () => {
  const routes = useRoutesConstants();
  // const intl = useIntl();
  // const content = ContentPage(intl);

  return (
    <div>
      {/* <h1>{content.teamCards}</h1> */}
      <Header />
      <h2>App</h2>
      {routes}
    </div>
  );
};

export default App;
