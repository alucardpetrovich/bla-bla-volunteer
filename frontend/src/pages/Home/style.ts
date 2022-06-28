import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  /* h2 {
    display: block;
    flex-basis: 20%;
  } */
  /* div {
    flex-basis: 20%;
  } */
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
`;
