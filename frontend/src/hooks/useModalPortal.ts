import { useEffect } from 'react';
import { useHandleBoolChange } from '.';

export const useModalPortal = () => {
  const refBody = document.querySelector('body');
  const [isModalOpen, handleModal] = useHandleBoolChange(false);

  useEffect(() => {
    isModalOpen
      ? (refBody.style.overflow = 'hidden')
      : (refBody.style.overflow = 'auto');
  }, [isModalOpen, refBody]);

  return [isModalOpen, handleModal] as [boolean, () => void];
};
