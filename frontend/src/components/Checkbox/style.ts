import styled from 'styled-components';

export interface ICheckBoxProps {
  checked?: boolean;
}

export const StyledOption = styled.label`
  display: flex;
  align-items: center;
  height: 3.125rem;
  border-bottom: 1px solid $themeMono6;
  padding-left: 1.2em;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: ${p => p.theme.palette.primary.main}
  width: 320px;
  height: fit-content;
  margin-bottom: 21px;
  cursor: pointer;
`;

export const StyledCheckboxInput = styled.input`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const StyledCheckboxBoxChecked = styled.span<ICheckBoxProps>`
  position: absolute;
  margin-left: -1.4em;
  width: 1em;
  height: 1em;
  background-color: ${({ checked, theme }) => (checked ? theme.palette.primary.main : theme.palette.common.white)};
  border: 1px solid ${({ checked, theme }) => (checked ? theme.palette.primary.main : theme.palette.grey[500])};
  display: flex;
  justify-content: center;
  align-items: center;
`;
