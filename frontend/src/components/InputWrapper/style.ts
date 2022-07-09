import styled from 'styled-components';

export interface InputWrapperContainerProps {
  horizontal?: boolean;
  width?: number | string;
}

export interface InputWrapperLabelProps {
  htmlFor: string;
}

export const InputWrapperContainer = styled.div<InputWrapperContainerProps>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin-bottom: 21px;
`;

export const InputWrapperLabel = styled.label<InputWrapperLabelProps>`
  display: flex;
  color: ${p => p.theme.palette.primary.main};
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  margin-bottom: 8px;
`;

export const RequiredLabelElement = styled.label`
  color: red;
  margin-left: 5px;
`;
