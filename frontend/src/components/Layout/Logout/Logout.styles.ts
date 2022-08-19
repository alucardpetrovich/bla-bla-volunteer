import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  ${p => p.theme.font('h3_900')};
  display: block;
  color: ${p => p.theme.palette.common.black};
`;
