import { useFormatMessage } from '../../hooks';
import { homeI18n } from '../../intl/content';
import useRoutesConstants from '../../hooks/useRoutes';
import { Global } from '../../utils/styles';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import {
  MainStyledHeader,
  SecondaryStyledHeader,
  Text,
} from '../../components/StyledComponents';

export const App = () => {
  const routes = useRoutesConstants();
  const f = useFormatMessage;

  return (
    <>
      <Global />
      <MainContainer>
        <h1>{f(homeI18n.title)}</h1>
        <Header />
        <MainStyledHeader>Main Styled Header</MainStyledHeader>
        <SecondaryStyledHeader>Secondary Styled Header</SecondaryStyledHeader>
        <Text>
          Regular styled text. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iusto vitae necessitatibus veritatis aliquid optio
          possimus voluptatem deserunt corporis accusantium omnis,
          exercitationem delectus eum natus ratione. Eum doloremque maxime
          ducimus quo!
        </Text>
        {routes}
      </MainContainer>
    </>
  );
};

export default App;
