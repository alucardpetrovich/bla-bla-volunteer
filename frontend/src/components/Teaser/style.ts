import styled from 'styled-components';

export const TeaserWrapper = styled.div<{ direction?: string; padding?: string }>`
  display: flex;
  width: 100%;
  padding: ${({ padding }) => padding ?? '100px 0px'};
  flex-direction: ${({ direction }) => direction ?? 'row'};

  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: ${({ padding }) => padding ?? '80px 0px'};
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const TeaserItem = styled.div<{ isActive?: boolean }>`
  cursor: pointer;

  h2 {
    font-weight: 900;
    font-size: 20px;
    line-height: 120%;
    border-bottom: ${({ isActive, theme }) =>
      isActive ? `5px solid ${theme.palette.common.black}` : `1px solid ${theme.palette.common.light_gray}`};
    padding-bottom: 40px;
    margin-bottom: 40px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  h2,
  p {
    color: ${({ isActive, theme }) =>
      isActive ? `1px solid ${theme.palette.common.black}` : `1px solid ${theme.palette.common.light_gray}`};

    transition: color 0.7s ease-out;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    h2 {
      font-size: 16px;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }
    p {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    h2 {
      font-size: 14px;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }
    p {
      font-size: 11px;
    }
  }
`;
