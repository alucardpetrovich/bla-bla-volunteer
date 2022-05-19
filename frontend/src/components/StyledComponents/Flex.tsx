import styled from 'styled-components';

type IFlex = {
  children?: any;
  className?: string;
  container?: boolean;
  /****** Container Props ********/
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'initial'
    | 'inherit';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
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
};

const Component = styled.div`
  display: ${props => (props.container ? 'flex' : 'block')};
  justify-content: ${props.justifyContent || 'flex-start'};
  flex-direction: ${props.flexDirection || 'row'};
  flex-grow: ${props.flexGrow || 0};
  flex-basis: ${props.flexBasis || 'auto'};
  flex-shrink: ${props.flexShrink || 1};
  flex-wrap: ${props.flexWrap ? 'wrap' : 'nowrap'};
  flex: ${props.flex || '0 1 auto'};
  align-items: ${props.alignItems || 'stretch'};
  margin: ${props.margin || '0'};
  padding: ${props.padding || '0'};
  width: ${props.width || 'auto'};
  height: ${props.height || 'auto'};
  max-width: ${props.maxWidth || 'none'};
`;

const Flex = props => {
  return <Component>{props.children}</Component>;
};

export default Flex;
