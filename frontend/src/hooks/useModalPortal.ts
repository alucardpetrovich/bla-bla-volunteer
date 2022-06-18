import { useEffect } from 'react';

import { useHandleBoolChange } from '.';

// FIXME: Пофіксить з react-use. as [boolean, () => void] дуже погано. Поправить або я пізніше поправлю
export const useModalPortal = () => {
  const refBody = document.body;
  const [isModalOpen, handleModal] = useHandleBoolChange(false);

  useEffect(() => {
    isModalOpen ? (refBody.style.overflow = 'hidden') : (refBody.style.overflow = 'auto');
  }, [isModalOpen, refBody]);

  return [isModalOpen, handleModal] as [boolean, () => void];
};
