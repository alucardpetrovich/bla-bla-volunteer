import styled from 'styled-components';

// FIXME: дропнуть це і ніде не використовувать більше. Компонентний підход. Треба шось таке в папочці з компонентом
//  робимо

type FlexTypes = 'div' | 'button';

export interface IFlex {
  tag?: FlexTypes;
  className?: string;
  container?: boolean;
  /****** Container Props ********/
  flexDirection?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
  /****** Child Props ********/
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
  flex?: string;
  /****** Common Layout Props ********/
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export const FlexDiv = styled.div<IFlex>`
  display: ${({ container }) => (container ? 'flex' : 'block')};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  flex-grow: ${({ flexGrow }) => flexGrow || 0};
  flex-basis: ${({ flexBasis }) => flexBasis || 'auto'};
  flex-shrink: ${({ flexShrink }) => flexShrink || 1};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  flex: ${({ flex }) => flex || '0 1 auto'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
`;
