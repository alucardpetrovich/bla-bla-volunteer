import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${p => p.theme.palette.primary.main};
  width: 263px;
  height: 508px;
  padding: ${p => p.theme.spacing(4)};
`;

export const TitleStyled = styled.h3`
  ${p => p.theme.font('h5_900')}
  color: ${p => p.theme.palette.primary.main};
  margin-bottom: ${p => p.theme.spacing(4)};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const StatisticText = styled.p`
  margin-right: auto;
  margin-left: ${p => p.theme.spacing(2)};

  ${p => p.theme.font('body4')}
`;

export const TestBox = styled.div`
  width: 40px;
  height: 15px;
  background-color: black;
`;

export const StatisticBox = styled.div`
  height: 130px;
`;

export const Box = styled.div`
  position: relative;
`;

export const CategoryTitle = styled.h3`
  ${p => p.theme.font('body4')}

  font-weight: 700;

  margin: ${p => p.theme.spacing(4, 0, 2, 1)};
`;

export const StatisticWrapper = styled.div`
  height: 180px;
`;

export const CategoryText = styled.p`
  ${p => p.theme.font('body7')}
  position: absolute;
  left: 8px;
`;

export const Category1 = styled(CategoryText)`
  top: 25px;
`;

export const Category2 = styled(CategoryText)`
  top: 75px;
`;

export const Category3 = styled(CategoryText)`
  top: 125px;
`;
