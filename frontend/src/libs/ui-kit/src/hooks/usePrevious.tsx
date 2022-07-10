import { useEffect, useRef } from 'react';

interface IRef {
  current: undefined | string;
}

export const usePrevious = (value: string) => {
  const ref: IRef = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
