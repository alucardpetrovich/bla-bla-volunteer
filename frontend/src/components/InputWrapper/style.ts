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
  width: ${({ width }) => (width ? `${width}px` : '320px')};
  margin-bottom: 21px;
`;

export const InputWrapperLabel = styled.label<InputWrapperLabelProps>`
  display: flex;
  color: ${p => p.theme.palette.primary.main};
  ${p => p.theme.font('body3')}
  margin-bottom: ${p => p.theme.spacing(1)};
`;

export const RequiredLabelElement = styled.label`
  color: red;
  margin-left: ${p => p.theme.spacing(0.7)};
`;
