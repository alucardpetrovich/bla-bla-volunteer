import { useEffect } from 'react';
import { useToggle } from 'react-use';

export const useModalPortal = () => {
  const refBody = document.body;
  const [isModalOpen, handleModal] = useToggle(false);

  useEffect(() => {
    isModalOpen ? (refBody.style.overflow = 'hidden') : (refBody.style.overflow = 'auto');
  }, [isModalOpen, refBody]);

  return [isModalOpen, handleModal];
};
