import { FC } from 'react';
import Header from 'components/Header';
import GlobalStyle from 'utils/styles/global';
import WithRefreshTokenCheck from '../../hoc/withRefreshTokenCheck';
import * as S from './style';
import Roots from '../Roots';

const Layout: FC = () => {
  return (
    <S.SiteContainer>
      <GlobalStyle />
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <S.MainContainer>
        <main style={{ textAlign: 'center' }}>
          <Roots />
        </main>
      </S.MainContainer>
    </S.SiteContainer>
  );
};

export default WithRefreshTokenCheck(Layout);
