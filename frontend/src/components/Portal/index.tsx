import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children?: any;
}

const Portal: React.FC<IPortal> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector('body'))
    : null;
};
export default Portal;
