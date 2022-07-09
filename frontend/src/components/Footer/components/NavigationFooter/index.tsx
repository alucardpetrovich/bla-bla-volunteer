import React from 'react';

import * as S from './style';

type Data = { link: string; path: string };

interface INavigationFooter {
  data: Data[];
}

export const NavigationFooter: React.FC<INavigationFooter> = ({ data }) => {
  return (
    <S.NavigationFooterList>
      {data?.map((item, key) => (
        <S.NavigationFooterListItem key={key}>
          <a href={item.path}>{item.link}</a>
        </S.NavigationFooterListItem>
      ))}
    </S.NavigationFooterList>
  );
};
