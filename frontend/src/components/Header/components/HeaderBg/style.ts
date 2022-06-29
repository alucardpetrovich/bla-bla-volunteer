import styled from 'styled-components';

import bgImg from '../../../../assets/images/header-bg.png';
import bgImgAuth from '../../../../assets/images/header-bg-auth.png';
// import bgImgAuthS from '../../../../assets/images/header-bg-s.png';

export interface IBg {
  isAuth: boolean;
  isShowHeading: boolean;
  // FIXME: Шо це і для чого? Видалить якщо не треба або поставить правильний тип
  // eslint-disable-next-line
  children?: any;
}

export const Bg = styled.div<IBg>`
  background-image: url(${({ isAuth, isShowHeading }) =>
    !isAuth && !isShowHeading ? bgImg : !isAuth ? bgImgAuth : ''});
  width: 100%;
  height: ${({ isAuth, isShowHeading }) => (isAuth || isShowHeading ? '120px' : '100vh')};
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;
