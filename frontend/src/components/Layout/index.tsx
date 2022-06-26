import { FC } from 'react';
import WithRefreshTokenCheck from '../../hoc/withRefreshTokenCheck';
import { GlobalFonts, GlobalStyle } from '../../utils/styles';
import { Container, Heading, Text } from '../StyledComponents';
import Footer from '../Footer';
import Header from '../Header';
import Roots from '../Roots';

const Layout: FC = () => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <Container tag="content">
        <Header />
        <Container tag="main">
          <Roots />
        </Container>
        <Container tag="footer">
          <Footer />
        </Container>
      </Container>
    </>
  );
};

export default WithRefreshTokenCheck(Layout);
