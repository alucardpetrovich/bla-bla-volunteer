import styled from 'styled-components';

export const TeaserWrapper = styled.div<{ direction?: string; padding?: string }>`
  display: flex;
  width: 100%;
  padding: ${({ padding }) => padding ?? '100px 0px'};
  flex-direction: ${({ direction }) => direction ?? 'row'};
`;

export const TeaserItem = styled.div<{ isActive?: boolean }>`
  margin-top: 50px;
  cursor: pointer;

  h2 {
    font-weight: 900;
    font-size: 20px;
    line-height: 120%;

    border-bottom: ${({ isActive }) => (isActive ? '1px solid var(--text-dark)' : '1px solid var(--light-gray)')};
    padding-bottom: 40px;
    margin-bottom: 40px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
  }

  h2,
  p {
    color: ${({ isActive }) => (isActive ? 'black' : 'var(--light-gray)')};
    transition: color 0.7s ease-out;
  }
`;
