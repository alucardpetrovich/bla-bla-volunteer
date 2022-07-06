import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children?: React.ReactNode;
}

const Portal: FC<IPortal> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
};
export default Portal;
