import React from 'react';

import { dataNetwork } from './assets/data';
import * as S from './style';

type Data = {
  href?: string;
  alt?: string;
  img?: HTMLImageElement;
};

interface INetworks {
  data?: Data[];
}

export const Networks: React.FC<INetworks> = ({ data = dataNetwork }) => {
  return (
    <S.NetworksWrapper>
      {data.map((item, key) => (
        <li key={key}>
          <a href={item.href}>
            <S.NetworksImg src={item.img} alt={item.alt} />
          </a>
        </li>
      ))}
    </S.NetworksWrapper>
  );
};
