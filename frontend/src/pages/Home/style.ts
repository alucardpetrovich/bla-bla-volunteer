import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  display: flex;
  width: 100%;

  h3 {
    margin-top: 50px;
    margin-right: 128px;
    max-width: 522px;

    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  .teaser {
    padding: 0;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    h3 {
      font-size: 16px;
      margin-right: 79px;
      max-width: 322px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    h3 {
      max-width: 422px;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    h3 {
      max-width: 100%;
      margin-right: 0px;
    }
  }
`;

export const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 900;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 132px;

  img {
    object-fit: cover;
    background-size: 50%;
    transition: all 200ms 275ms ease-in-out;
    background-repeat: no-repeat;
    background-size: 160%;
    background-position: center center;

    :hover {
      cursor: pointer;
    }
    :first-child {
      width: 550px;
      height: 400px;
    }
    :last-child {
      background-size: 50%;
      width: 650px;
      height: 400px;
    }
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 70px;
    img {
      :first-child {
        width: 47%;
        height: 300px;
        margin-right: 30px;
      }
      :last-child {
        background-size: 50%;
        width: 48%;
        height: 300px;
      }
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding-bottom: 70px;
    img {
      :first-child {
        width: 100%;
        height: 300px;
        margin-right: 0px;
        margin-bottom: 30px;
      }
      :last-child {
        background-size: 50%;
        width: 100%;
        height: 300px;
      }
    }
  }
`;
