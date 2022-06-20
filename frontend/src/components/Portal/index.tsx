import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  // FIXME: Пофіксить. без any будь ласка
  // eslint-disable-next-line
  children?: any;
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
