import React from 'react';
import * as S from './style';

interface SpacingProps {
  height: string | number;
}

export const Spacing: React.FC<SpacingProps> = ({ height }) => {
  return <S.SpacingWrapper height={typeof height === 'string' ? height : height.toString() + 'px'} />;
};
