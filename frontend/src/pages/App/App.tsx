import Header from '../../components/modules/Header';
import useRoutesConstants from '../../hooks/useRoutes';

function App() {
  const routes = useRoutesConstants();

  return (
    <div>
      <Header />

      <h2>App</h2>

      {routes}
    </div>
  );
}
export default App;
