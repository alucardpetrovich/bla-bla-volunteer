import styled from 'styled-components';

interface SpacingProps {
  height: string | number;
}

export const SpacingWrapper = styled.div<SpacingProps>`
  padding-bottom: ${({ height }) => height};
`;
