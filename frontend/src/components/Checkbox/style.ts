import styled from 'styled-components';

export interface ICheckBoxProps {
  active?: boolean;
}

export const StyledCheckboxInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 20px;
  height: 20px;
`;

export const StyledCheckbox = styled.span<ICheckBoxProps>`
  display: inline-block;
  height: 20px;
  width: 20px;
  background: #fff;
  border: 2px #ddd solid;
  margin-right: 4px;
  border-color: ${({ active }) => (active ? '#93A9D2' : '#ddd')};
  background: ${({ active }) => (active ? '#93A9D2' : '#fff')};
`;
