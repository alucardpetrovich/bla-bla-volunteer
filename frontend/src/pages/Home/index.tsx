import React, { useState } from 'react';
import { Teaser } from 'src/components/Teaser';
import authorizationAPI from '../../api/Auth/Auth';
import { homeData } from './assets/data';
import * as S from './style';

const HomePage = () => {
  const data = homeData;
  const [currentIndex, setCurrentIndex] = useState(0);
  //! remove, just for test auth & headers with token

  const handExampleRequest = () => {
    authorizationAPI.exampleRequest();
  };

  return (
    <>
      <S.SectionTitle>{data.title_1}</S.SectionTitle>
      <Teaser data={data.firstTeaser} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

      <S.ImageWrapper>
        <img src={data.firstTeaser[currentIndex].image_1} />
        <img src={data.firstTeaser[currentIndex].image_2} />
      </S.ImageWrapper>

      <S.SectionTitle>{data.title_2}</S.SectionTitle>
      <S.DescriptionWrapper>
        <h3>{data.description} </h3>
        <Teaser data={data.secondTeaser} direction="column" padding="0" isBlockBubbling={true} />
      </S.DescriptionWrapper>
    </>
  );
};
export default HomePage;
