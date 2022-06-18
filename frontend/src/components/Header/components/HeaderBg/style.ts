import styled from 'styled-components';

import bgImg from '../../../../assets/images/header-bg.png';
import bgImgAuth from '../../../../assets/images/header-bg-auth.png';

export interface IBg {
  isAuth: boolean;
  // FIXME: Шо це і для чого? Видалить якщо не треба або поставить правильний тип
  // eslint-disable-next-line
  children?: any;
}

export const Bg = styled.div<IBg>`
  background-image: url(${({ isAuth }) => (isAuth ? bgImgAuth : bgImg)});
  width: 100%;
  height: ${({ isAuth }) => (isAuth ? '120px' : '100vh')};
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;
