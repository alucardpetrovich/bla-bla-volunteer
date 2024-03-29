import 'styled-components';
import '@mui/material/styles';

import { Breakpoints } from '@mui/material/styles';
import {
  ColorPartial,
  CommonColors,
  SimplePaletteColorOptions,
  TypeBackground,
} from '@mui/material/styles/createPalette';

type FontEntry =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h3_900'
  | 'h4'
  | 'h4_900'
  | 'h5'
  | 'h5_900'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6'
  | 'body7'
  | 'body8'
  | 'body9'
  | 'text1'
  | 'h1_900'
  | 'title';

interface ThemeSimplePaletteColorOptions extends SimplePaletteColorOptions {
  hover?: string;
  blue?: string;
}

export interface ThemePalette {
  common: Partial<CommonColors>;
  background: Partial<TypeBackground>;
  grey: ColorPartial;
  info: ThemeSimplePaletteColorOptions;
  primary: ThemeSimplePaletteColorOptions;
  secondary: ThemeSimplePaletteColorOptions;
}

interface FontProps {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  fontFamily?: string;
}
type TSpacing = number | 'auto';
export type Types = Record<FontEntry, FontProps>;
interface CustomThemeOptions {
  palette: ThemePalette;
  spacing(...values: TSpacing[]): string;
  font(type: FontEntry): string;
  hover: string;
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
