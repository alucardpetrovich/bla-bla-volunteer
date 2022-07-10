import styled from 'styled-components';

export const StyledTextButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme, color }) => (color ? color : theme.palette.common.black)};
  font-family: 'Inter';
  font-size: 20px;
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: normal;
`;
