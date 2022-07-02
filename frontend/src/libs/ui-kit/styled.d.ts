import 'styled-components';
import '@mui/material/styles';

import { Breakpoints, SimplePaletteColorOptions, TypeText } from '@mui/material/styles';

type FontEntry = 'h2' | 'h3';
interface ThemePalette {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  text: TypeText;
  background: SimplePaletteColorOptions;
}

interface FontProps {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  fontFamily?: string;
}
type TSpacing = number | 'auto';
interface CustomThemeOptions {
  palette: ThemePalette;
  spacing(...values: TSpacing[]): string;
  f: Record<FontEntry, FontProps>;
  font(type: FontEntry): string;
}

declare module '@mui/material' {
  export interface ThemeOptions extends CustomThemeOptions {
    spacing(...values: TSpacing[]): string;
  }

  // eslint-disable-next-line
  export interface PaletteOptions extends ThemePalette {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomThemeOptions {
    breakpoints: Breakpoints;
  }
}
