import { useMediaQuery } from 'react-responsive';

interface IUseMedia {
  MOB: boolean;
  TABL: boolean;
  ONLY_TABL_TEST: boolean;
  DESK: boolean;
  HD: boolean;
}

/* !!! ТОЧКИ ПЕРЕЛОМА ПОКА ЛИШЬ КАК ПРИМЕР!!! ПОТОМ ПОД ЭТОТ ПРОЕКТ ПОДПРАВИТЬ!!! */

/**
 * @returns {boolean} -
 * MOB: max-width: 699px; TABL: min-width: 700px; DESK: min-width: 1024px; HD: min-width 1440px;
 */
const useMedia = (): IUseMedia => {
  const MOB = useMediaQuery({ query: '(max-width: 699px)' });
  const TABL = useMediaQuery({ query: '(min-width: 700px)' });
  const ONLY_TABL_TEST = useMediaQuery({
    query: '(min-width: 700px) and (max-width: 1023px)',
  });
  const DESK = useMediaQuery({ query: '(min-width: 1024px)' });
  const HD = useMediaQuery({ query: '(min-width: 1440px)' });

  return { MOB, TABL, ONLY_TABL_TEST, DESK, HD };
};

export default useMedia;
