import styled from 'styled-components';

interface ModalPopUpProps {
  width?: string;
  height?: string;
  position?: string;
  padding?: string;
}

export const HeaderButton = styled.div`
  position: sticky;
  bottom: 90%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Block = styled.div<ModalPopUpProps>`
  width: ${({ width }) => width ?? '600px'};
  position: absolute;
  display: flex;
  height: ${({ height }) => height ?? '100%'};

  animation-name: popUp;
  transition: 2s ease-out;
  /* animation-duration: 0.5s; */
  /* -webkit-animation-duration: 1s; */
  animation-timing-function: ease;
  -webkit-animation-timing-function: ease;
  visibility: visible !important;
  z-index: 2;

  @keyframes popUp {
    0% {
      transform: translateY(100%);
    }
    50% {
      transform: translateY(-4%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

export const StickyEffect = styled.div<ModalPopUpProps>`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: ${({ height }) => height ?? '1500px'};
  width: 100%;
  img {
    right: 0;
  }
`;

export const PositionButton = styled.div`
  position: absolute;
  top: 4%;
  left: 5%;
  z-index: 3;
`;

export const ModalPopUpWrapper = styled.div<ModalPopUpProps>`
  position: fixed;
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  top: 0;
  left: 0;
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  -webkit-backdrop-filter: saturate(170%) blur(1.125rem);
  backdrop-filter: saturate(170%) blur(1.125rem);
  background-color: rgba(245, 245, 245, 0.32);
  box-sizing: border-box;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: ${({ position }) => position === 'center' && 'center'};

  ::-webkit-scrollbar {
    width: 0.313rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--moon-D5);
    border-radius: 9em;
  }
`;

export const CloseButton = styled.div`
  position: sticky;
  top: 0;
  right: 5%;
  // FIXME: ??
  height: 100%;
  display: flex;
  justify-content: flex-start;
  width: 2.5rem;
  // FIXME: ??
  height: 2.5rem;
  border-radius: 2.5rem;
  z-index: 1;
  margin: 1.25rem auto;
  cursor: pointer;
  &:before {
    content: '+';
    color: var(--moon-D);
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    font-size: 3.125rem;
    line-height: 1;
    top: -0.5rem;
    left: 0.438rem;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: grey;
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
    transform: scale(0.01);
  }
  &:hover:after {
    transform: scale(1);
  }
  &:hover:before {
    transform: scale(0.8) rotate(45deg);
    color: #fff;
  }
`;

export const ModalPopUpContentText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalPopUpContent = styled.div<ModalPopUpProps>`
  transform: translateY(0%);
  overflow: hidden;
  border-radius: 1.125rem;
  padding: ${({ padding }) => padding ?? '126px 157px 169px'};
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  align-items: center;
  box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
  cursor: initial;
  background-color: white;
  width: ${({ width }) => width ?? '1020px'};
  height: ${({ height }) => height ?? '1500px'};
  animation-name: popUp;
  transition: 2s ease-out;
  animation-timing-function: ease;
  -webkit-animation-timing-function: ease;
  visibility: visible !important;

  @keyframes popUp {
    0% {
      transform: translateY(100%);
    }
    50% {
      transform: translateY(-4%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;
