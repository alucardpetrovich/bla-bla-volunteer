import React from 'react';

import * as S from './style';

type Data = { link: string; path: string };

interface INavigationFooter {
  data: Data[];
}

export const NavigationFooter: React.FC<INavigationFooter> = ({ data }) => {
  return (
    <S.NavigationFooterWrapper>
      {data?.map((item, key) => (
        <li key={key}>
          <a href={item.path}>{item.link}</a>
        </li>
      ))}
    </S.NavigationFooterWrapper>
  );
};
