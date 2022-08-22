import styled from 'styled-components';

import { NavigationType } from './Navigation';

export const Item = styled.span`
  display: block;
  padding: ${p => p.theme.spacing(1)};
  margin: ${p => p.theme.spacing(0, 1)};
  color: ${p => p.theme.palette.common.black};
`;

export const Wrapper = styled.div<{ type: NavigationType }>`
  display: flex;
  align-items: center;
  ${({ theme, type }) => {
    return type === 'primary' ? theme.font('h3_900') : theme.font('h5_900');
  }};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
