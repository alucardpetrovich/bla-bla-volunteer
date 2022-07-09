import styled from 'styled-components';

import bgImg from '../../../../assets/images/header-bg.png';
import bgImgAuth from '../../../../assets/images/header-bg-auth.png';

export interface IBg {
  isAuth: boolean;
  isShowHeading: boolean;
}

const bgImageFunc = (isAuth: boolean, isShowHeading: boolean) => {
  if (!isAuth && !isShowHeading) return `url(${bgImg})`;
  if (!isAuth) return `url(${bgImgAuth})`;
};

export const Bg = styled.div<IBg>`
  background-image: ${({ isAuth, isShowHeading }) => bgImageFunc(isAuth, isShowHeading)};
  width: 100%;
  ${({ isAuth, isShowHeading }) => (isAuth || isShowHeading ? 'height: 120px;' : 'min-height: 100vh;')};
  background-repeat: no-repeat;
  background-position: right center;
  ${({ isAuth, isShowHeading }) =>
    (!isAuth && !isShowHeading) || isShowHeading ? 'background-position: top;' : 'background-position: right;'};
  background-size: cover;
`;
