// import { theme } from '@ui-kit';
import React, { useState } from 'react';
import { Teaser } from 'src/components/Teaser';

import { HomeData } from './assets/data';
import * as S from './style';

const HomePage = () => {
  const data = HomeData();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <S.SectionTitle>{data.title_1}</S.SectionTitle>
      <Teaser
        data={data.firstTeaser}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isBlockBubbling={true}
      />

      <S.ImageWrapper>
        <img src={data.firstTeaser[currentIndex].image_1} />
        <img src={data.firstTeaser[currentIndex].image_2} />
      </S.ImageWrapper>

      <S.SectionTitle>{data.title_2}</S.SectionTitle>
      <S.DescriptionWrapper>
        <h3>{data.description} </h3>
        <Teaser
          data={data.secondTeaser}
          direction="column"
          padding="0"
          // padding={theme.spacing(0, 0, 6.6, 0)}
          isBlockBubbling={false}
        />
      </S.DescriptionWrapper>
    </>
  );
};
export default HomePage;
