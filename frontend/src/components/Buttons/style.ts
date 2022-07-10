import styled from 'styled-components';

export interface StyledButtonProps {
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  marginBottom?: string | number;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ buttonType, disabled }) => {
    if (disabled) return '#808080';
    if (!buttonType) return '#F5DF4D';
    if (buttonType === 'primary') return '#F5DF4D';
    if (buttonType === 'secondary') return '#93A9D2';
    if (buttonType === 'tertiary') return '#ffffff';
  }};
  width: ${({ buttonType }) => {
    if (!buttonType) return '190px';
    if (buttonType === 'primary' || buttonType === 'tertiary') return '190px';
    if (buttonType === 'secondary') return '160px';
  }};
  border: ${({ buttonType }) => {
    if (!buttonType || buttonType === 'primary' || buttonType === 'secondary') return '1px solid #323434';
    if (buttonType === 'tertiary') return '1px solid #8C8E91';
  }};
  border-radius: 5px;
  margin-bottom: ${({ marginBottom }) => {
    if (!marginBottom) return `${0}px`;
    if (marginBottom) return `${marginBottom}px`;
  }};
  color: ${({ buttonType }) => {
    if (!buttonType || buttonType === 'primary' || buttonType === 'secondary') return '#323434';
    if (buttonType === 'tertiary') return '#8C8E91';
  }};
  height: 45px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  &:hover {
    background-color: ${({ buttonType, disabled }) => {
      if (disabled) return '#808080';
      if (!buttonType) return '#f6d605';
      if (buttonType === 'primary') return '#f6d605';
      if (buttonType === 'secondary') return '#5880cb';
      if (buttonType === 'tertiary') return '#e2e2e2';
    }};
  }
`;
