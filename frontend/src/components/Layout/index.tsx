import { FC } from 'react';
import Header from 'components/Header';
import GlobalStyle from 'utils/styles/global';
import WithRefreshTokenCheck from '../../hoc/withRefreshTokenCheck';
import Roots from '../Roots';
import { StyledContainer, StyledHeader } from 'components/StyledComponents';
import Footer from 'components/Footer';

const Layout: FC = () => {
  return (
    <>
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
        </StyledContainer>
        <StyledContainer tag="footer">
          <Footer />
        </StyledContainer>
      </StyledContainer>
    </>
  );
};

export default WithRefreshTokenCheck(Layout);
