import styled from 'styled-components';

interface StyledDividerProps {
  color?: string;
  margin?: string;
}

export const StyledDivider = styled.div<StyledDividerProps>`
  min-height: 1px;
  width: 100%;
  background-color: ${({ color, theme }) => (color ? color : theme.palette.common.black)};
  margin: ${({ margin }) => margin ?? margin};
`;
