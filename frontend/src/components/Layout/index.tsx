import { FC } from 'react';
import Header from 'components/Header';
import { GlobalFonts, GlobalStyle } from 'utils/styles';
import WithRefreshTokenCheck from '../../hoc/withRefreshTokenCheck';
import Roots from '../Roots';
import {
  StyledContainer,
  StyledHeader,
  Text,
} from 'components/StyledComponents';
import Footer from 'components/Footer';

const Layout: FC = () => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <StyledContainer tag="content">
        <StyledContainer tag="header">
          <Header />
        </StyledContainer>
        <StyledContainer tag="main">
          <Roots />
          <StyledHeader tag="h1">h1</StyledHeader>
          <StyledHeader tag="h2">h2</StyledHeader>
          <StyledHeader tag="h3">h3</StyledHeader>
          <Text>
            Lorem ipsum
            <Text tag="link" href="https://www.google.com/">
              dolor sit amet
            </Text>
            consectetur adipisicing elit. Porro saepe dignissimos tenetur fugiat
            sed!{' '}
            <Text color="var(--accent-blue)">
              Cumque perferendis repellendus consequuntur soluta aspernatur
              illum sint! Unde a molestias officia odit tenetur tempora vero!
            </Text>
          </Text>
        </StyledContainer>
        <StyledContainer tag="footer">
          <Footer />
        </StyledContainer>
      </StyledContainer>
    </>
  );
};

export default WithRefreshTokenCheck(Layout);
