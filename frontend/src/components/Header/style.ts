import styled from 'styled-components';

import bgImgS from '../../assets/images/header-bg-s.png';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitleWrapper = styled.div`
  width: 700px;
  margin-left: auto;
`;

export const HeaderSubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignUpButton = styled.button`
  width: 250px;
  background: transparent;
  border-color: ${({ color }) => color};
  border-width: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const LogoBackground = styled.div`
  width: 250px;
  height: 128px;
  background-image: url(${bgImgS});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 250px);
  padding: 0px 32px;
`;
