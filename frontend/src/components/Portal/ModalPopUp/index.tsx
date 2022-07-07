import { FC } from 'react';

import * as S from './style';

interface IModalPopUp {
  isClose?: (nextValue?: unknown) => void;
  children?: React.ReactNode;
  height?: string;
  padding?: string;
  width?: string;
  position?: string;
}
/* eslint-enable  */

/**
 *
 * @param isClose - handleModal hook function for closing
 * @param children - any content
 * @param height - custom height, default 100%
 * @param padding - custom padding,  default 126px 157px 169px
 * @param width - custom width, default 1020px
 * @param position
 * @example
 *<button onClick={handleModal}> Click</button>
{isModalOpen && (
      <Portal>
        <ModalPopUp isClose={handleModal}>
          <Content...... />
        </ModalPopUp>
      </Portal>
  )}
 * @returns
 */

export const ModalPopUp: FC<IModalPopUp> = ({ isClose, children, height, padding, width, position }) => {
  return (
    <>
      <S.ModalPopUpWrapper className="popUp" position={position}>
        <S.Block width={width} height={height}>
          <S.PositionButton>
            <S.StickyEffect height={height}>
              <S.HeaderButton>
                <S.CloseButton onClick={isClose} />
              </S.HeaderButton>
            </S.StickyEffect>
          </S.PositionButton>
        </S.Block>

        <S.ModalPopUpContent height={height} padding={padding} width={width}>
          {children}
        </S.ModalPopUpContent>
      </S.ModalPopUpWrapper>
    </>
  );
};
