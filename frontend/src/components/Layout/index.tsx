import Footer from 'components/Footer';
import Header from 'components/Header';
import { Container, Heading, Text } from 'components/StyledComponents';
import { FC } from 'react';
import { GlobalFonts, GlobalStyle } from 'utils/styles';

import WithRefreshTokenCheck from '../../hoc/withRefreshTokenCheck';
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
          <Heading tag="h2">h2</Heading>
          <Heading tag="h3">h3</Heading>
          <Heading tag="h4">h4</Heading>
          <Heading tag="h5">h5</Heading>
          <Text tag="b1" color="blue">
            Lorem ipsum consectetur adipisicing elit. Porro saepe dignissimos tenetur fugiat sed! Cumque perferendis
            repellendus consequuntur soluta aspernatur illum sint! Unde a molestias officia odit tenetur tempora vero!
          </Text>
          <Text tag="b2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit id nobis natus, vel quas
            sunt. Recusandae, atque architecto quos laboriosam aliquid quam optio odit. Ullam aut fugit ut nemo.
          </Text>
          <Text tag="b3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit id nobis natus, vel quas
            sunt. Recusandae, atque architecto quos laboriosam aliquid quam optio odit. Ullam aut fugit ut nemo.
          </Text>
          <Text tag="b4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit id nobis natus, vel quas
            sunt. Recusandae, atque architecto quos laboriosam aliquid quam optio odit. Ullam aut fugit ut nemo.
          </Text>
          <Text tag="b5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit id nobis natus, vel quas
            sunt. Recusandae, atque architecto quos laboriosam aliquid quam optio odit. Ullam aut fugit ut nemo.
          </Text>
          <Text tag="b6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit id nobis natus, vel quas
            sunt. Recusandae, atque architecto quos laboriosam aliquid quam optio odit. Ullam aut fugit ut nemo.
          </Text>
          <Text tag="b7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit id nobis natus, vel quas
            sunt. Recusandae, atque architecto quos laboriosam aliquid quam optio odit. Ullam aut fugit ut nemo.
          </Text>
        </Container>
        <Container tag="footer">
          <Footer />
        </Container>
      </Container>
    </>
  );
};

export default WithRefreshTokenCheck(Layout);
