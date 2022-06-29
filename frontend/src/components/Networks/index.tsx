import React from 'react';
import { InstaIcon, FaceBookIcon, TweetIcon } from 'src/assets/icons/networks';
import * as S from './style';

export const Networks = () => {
  return (
    <S.NetworksWrapper>
      <img src={InstaIcon} />
      <img src={FaceBookIcon} />
      <img src={TweetIcon} />
    </S.NetworksWrapper>
  );
};
