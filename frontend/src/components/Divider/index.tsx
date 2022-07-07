import React from 'react';

import * as S from './style';

interface IDivider {
  color?: string;
  margin?: string;
}

/**
 * @param color  default var(--text-dark) / like as black
 * @param padding  without default value
 * IDivider color={'red'}/>
 * @returns
 */

export const Divider: React.FC<IDivider> = ({ color, margin }) => {
  return <S.StyledDivider color={color} margin={margin} />;
};
