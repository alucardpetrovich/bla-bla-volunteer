import { FlexDiv, IFlex } from './style';

const StyledFlex: React.FC<IFlex> = ({
  children,
  tag = 'div',
  container,
  flexDirection,
  justifyContent,
  flexGrow,
  flexBasis,
  flexShrink,
  flexWrap,
  flex,
  alignItems,
  margin,
  padding,
  width,
  height,
  maxWidth,
  ...props
}) => {
  const Flex = {
    flexDiv: (
      <FlexDiv
        container={container}
        tag="div"
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        flexGrow={flexGrow}
        flexBasis={flexBasis}
        flexShrink={flexShrink}
        flexWrap={flexWrap}
        flex={flex}
        alignItems={alignItems}
        margin={margin}
        padding={padding}
        width={width}
        height={height}
        maxWidth={maxWidth}
        {...props}
      >
        {children}
      </FlexDiv>
    ),
  };
  return Flex[tag];
};

export default StyledFlex;
