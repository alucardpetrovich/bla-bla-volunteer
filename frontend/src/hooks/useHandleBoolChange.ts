import { useState } from 'react';

const useHandleBoolChange = (bool: boolean) => {
  const [boolStatus, setBoolStatus] = useState(bool);

  const statusHandleChange = () => {
    setBoolStatus(prevState => !prevState);
  };

  return [boolStatus, statusHandleChange];
};

export default useHandleBoolChange;
