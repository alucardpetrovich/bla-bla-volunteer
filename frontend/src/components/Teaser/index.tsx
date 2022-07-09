import React from 'react';

import * as S from './style';

type DataWithImg = {
  title: string;
  description: string;
};

interface ITeaser {
  data: DataWithImg[];
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  padding?: string;
  setCurrentIndex?: (currentIndex: number) => void;
  currentIndex?: number;
  isBlockBubbling?: boolean;
  onClick?: () => void;
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
  // const handleClick = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const selectType = e.target.closest('.teaser_item')?.getAttribute('data-index');
  //     console.log(selectType, 'selectType');
  //     if (selectType) {
  //       setCurrentIndex?.(Number(selectType));
  //     }
  //   },

  //   [setCurrentIndex],
  // );

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectType = e.target.closest('.teaser_item')?.getAttribute('data-index');
    // console.log(selectType, 'selectType');
    if (selectType) {
      setCurrentIndex?.(Number(selectType));
    }
  };

  return (
    <S.TeaserWrapper direction={direction} padding={padding} onClick={handleClick}>
      {data.map((item, key) => (
        <S.TeaserItem
          data-index={key}
          className="teaser_item"
          key={item.title + '' + key}
          onClick={handleClick}
          isActive={currentIndex === key && !isBlockBubbling ? true : false}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </S.TeaserItem>
      ))}
    </S.TeaserWrapper>
  );
};