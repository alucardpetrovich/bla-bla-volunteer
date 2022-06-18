import { useState } from 'react';

// FIXME: випилить це і юзать react-use. Наприклад useToggle. Виглядає дивно тому краще випилить
const useHandleBoolChange = (bool: boolean) => {
  const [boolStatus, setBoolStatus] = useState(bool);

  const statusHandleChange = () => {
    setBoolStatus(prevState => !prevState);
  };

  return [boolStatus, statusHandleChange];
};

export default useHandleBoolChange;
