import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${p => p.theme.spacing(2.5)};
`;

export const Container = styled.p`
  ${p => p.theme.font('h5_900')};
  color: ${p => p.theme.palette.common.black};
  margin-bottom: ${p => p.theme.spacing(7)};
`;

export const StyledAuthSpanText = styled.span`
  cursor: pointer;
  color: ${p => p.theme.palette.common.black};
`;
