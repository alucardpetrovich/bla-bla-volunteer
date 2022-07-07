import styled from 'styled-components';

import bgImg from '../../../../assets/images/header-bg.png';
import bgImgAuth from '../../../../assets/images/header-bg-auth.png';

export interface IBg {
  isAuth: boolean;
  isShowHeading: boolean;
}

export const Bg = styled.div<IBg>`
  ${({ isAuth, isShowHeading }) =>
    !isAuth && !isShowHeading
      ? `background-image: url(${bgImg});`
      : !isAuth
      ? `background-image: url(${bgImgAuth});`
      : 'null'};
  width: 100%;
  ${({ isAuth, isShowHeading }) => (isAuth || isShowHeading ? 'height: 120px;' : 'min-height: 100vh;')};
  background-repeat: no-repeat;
  background-position: right center;
  ${({ isAuth, isShowHeading }) =>
    (!isAuth && !isShowHeading) || isShowHeading ? 'background-position: top;' : 'background-position: right;'};
  background-size: cover;
`;
