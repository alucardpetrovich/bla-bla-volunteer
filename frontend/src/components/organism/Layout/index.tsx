import { FC } from 'react';
import WithRefreshTokenCheck from '../../../hoc/withRefreshTokenCheck';
import { GlobalFonts, GlobalStyle } from '../../../utils/styles';
import { Container } from '../../atoms';
import Roots from '../../modules/Roots';
import SideBar from '../SideBar';
import { useSelector } from 'react-redux';
import { Header, Footer } from '../../organism';
import * as S from './style';

const Layout: FC = () => {
  const isAuth: boolean = useSelector((state: any) => state.auth.isAuthenticated);

  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <Container tag="content">
        {/* <Header /> */}

        <S.SiteContainer>
          {isAuth && <SideBar />}
          <Container tag="main">{/* <Roots /> */}</Container>
        </S.SiteContainer>
        <Container tag="footer">
          <Footer />
        </Container>
      </Container>
    </>
  );
};

export default WithRefreshTokenCheck(Layout);
