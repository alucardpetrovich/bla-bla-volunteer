import { PATHS } from '../../../../../../constants/PATH';

export const linksNav = [
  {
    path: PATHS.HOME.path,
    text: 'home',
  },
  {
    path: PATHS.TEST.path,
    text: 'test',
  },
  {
    path: `${PATHS.AUTH.path}/${PATHS.LOGIN.path}`,
    text: 'Auth',
  },
];
