import Header from '../../components/modules/Header';
import useRoutesConstants from '../../hooks/useRoutes';

function App() {
  const routes = useRoutesConstants();

  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}
export default App;
