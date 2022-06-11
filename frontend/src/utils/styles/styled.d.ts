import 'styled-components';
import { Theme } from '@mui/material/styles';
interface CustomTheme {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    background: {
      default: '';
      paper: '';
    };
  };
}
declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
