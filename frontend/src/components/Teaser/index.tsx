import React, { useState } from 'react';
import * as S from './style';

type DataWithImg = {
  title: string;
  description: string;
};

interface ITeaser {
  data: DataWithImg[];
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  padding?: string;
  setCurrentIndex?: any;
  currentIndex?: number;
  isBlockBubbling?: boolean;
}

/**
 * @param data take a look on type Data
 * @param direction defines the row state
 * @param padding  default values 100px 0px
 * <Teaser data={data} direction='column'/>
 * @returns
 */

export const Teaser: React.FC<ITeaser> = ({
  data,
  direction,
  padding,
  setCurrentIndex,
  currentIndex,
  isBlockBubbling,
}) => {
  const handleClick = (e: any) => {
    const selectType: any = e.target.closest('.teaser_item').getAttribute('data-index');
    setCurrentIndex(selectType);
  };

  return (
    <S.TeaserWrapper direction={direction} padding={padding} onClick={!isBlockBubbling && handleClick}>
      {data.map((item, key) => (
        <S.TeaserItem
          onClick={!isBlockBubbling && handleClick}
          className="teaser_item active"
          key={item.title + '' + key}
          data-index={key}
          isActive={currentIndex == key ? true : isBlockBubbling ? true : false}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </S.TeaserItem>
      ))}
    </S.TeaserWrapper>
  );
};
