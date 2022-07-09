import React from 'react';

import * as S from './style';

interface IDivider {
  type?: number | 1;
}

/**
 * @param type has type - "default"
 * Example: <Divider type={1}/>
 * @returns
 */

export const Divider: React.FC<IDivider> = ({ type }) => {
  switch (type) {
    case 1:
      return <S.StyledDivider margin="20px 0px" />;

    default:
      return <S.StyledDivider margin="40px 0px" color={'#A29BC7'} />;
  }
};
