import { PATHS } from './PATH';

export const linksNav = [
  {
    path: PATHS.HOME.path,
    text: 'home',
    privateRoute: false,
    restricted: false,
  },
  {
    path: PATHS.LOGIN.path,
    text: 'login',
    privateRoute: false,
    restricted: true,
  },
  {
    path: PATHS.REGISTRATION.path,
    text: 'registration',
    privateRoute: false,
    restricted: true,
  },
  {
    path: PATHS.DONAR.path,
    text: 'donar',
    privateRoute: true,
    restricted: false,
  },
  {
    path: PATHS.HUB.path,
    text: 'hub',
    privateRoute: true,
    restricted: false,
  },
  {
    path: PATHS.DRIVER.path,
    text: 'driver',
    privateRoute: true,
    restricted: false,
  },
  {
    path: PATHS.PROFILE.path,
    text: 'profile',
    privateRoute: true,
    restricted: false,
  },
];
