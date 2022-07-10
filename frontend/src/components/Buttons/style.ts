import styled from 'styled-components';

export interface StyledButtonProps {
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  marginBottom?: string | number;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ buttonType, disabled, theme }) => {
    if (disabled) return theme.palette.grey[800];
    if (!buttonType) return theme.palette.info.main;
    if (buttonType === 'primary') return theme.palette.info.main;
    if (buttonType === 'secondary') return theme.palette.primary.main;
    if (buttonType === 'tertiary') return theme.palette.common.white;
  }};
  width: ${({ buttonType }) => {
    if (!buttonType) return '190px';
    if (buttonType === 'primary' || buttonType === 'tertiary') return '190px';
    if (buttonType === 'secondary') return '160px';
  }};
  border: ${({ buttonType, theme }) => {
    if (!buttonType || buttonType === 'primary' || buttonType === 'secondary')
      return `1px solid ${theme.palette.common.black}`;
    if (buttonType === 'tertiary') return `1px solid ${theme.palette.grey[500]}`;
  }};
  border-radius: 5px;
  margin-bottom: ${({ marginBottom }) => {
    if (!marginBottom) return `${0}px`;
    if (marginBottom) return `${marginBottom}px`;
  }};
  color: ${({ buttonType, theme }) => {
    if (!buttonType || buttonType === 'primary' || buttonType === 'secondary') return theme.palette.common.black;
    if (buttonType === 'tertiary') return theme.palette.grey[500];
  }};
  height: ${p => p.theme.spacing(5.5)};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.theme.spacing(2)};
  line-height: 130%;
  &:hover {
    background-color: ${({ buttonType, disabled, theme }) => {
      if (disabled) return theme.palette.grey[800];
      if (!buttonType) return theme.palette.info.hover;
      if (buttonType === 'primary') return theme.palette.info.hover;
      if (buttonType === 'secondary') return theme.palette.primary.hover;
      if (buttonType === 'tertiary') return theme.palette.grey[100];
    }};
  }
`;
