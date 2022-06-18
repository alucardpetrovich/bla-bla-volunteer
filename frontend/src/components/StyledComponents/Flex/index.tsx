import { FlexDiv, IFlex } from './style';

// FIXME: Просто комент. Мені здається такі конструкції більше заплутають в коді ніж принесуть користі. Надто багато
//  писанини тут. Якщо нам треба два флекс блоки то робимо два флекс блоки. Я б випилив це на майбутнє. Ну поки
//  можна залишить

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
  // FIXME: Пофіксить. tag опціональний. Коли буде undefined тоді впаде апка?
  // eslint-disable-next-line
  // @ts-ignore
  return Flex[tag];
};

export default StyledFlex;
