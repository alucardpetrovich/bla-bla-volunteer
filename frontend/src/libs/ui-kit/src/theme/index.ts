import { deepPurple, grey, indigo, lime } from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';

export enum DeviceSizes {
  xs = 360,
  sm = 768,
  md = 1024,
  lg = 1366,
  xl = 1920,
}

export const theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: DeviceSizes.xs,
      sm: DeviceSizes.sm,
      md: DeviceSizes.md,
      lg: DeviceSizes.lg,
      xl: DeviceSizes.xl,
    },
  },
  components: {
    // TODO: це для прикладу. Треба пофіксить
    MuiAutocomplete: {
      styleOverrides: {
        inputFocused: {
          fontSize: 36,
          lineHeight: 36,
        },
      },
    },
  },
  palette: {
    primary: {
      main: indigo[300],
    },
    secondary: {
      main: lime[400],
    },
    text: {
      primary: grey[900],
      secondary: deepPurple[400],
    },
    background: {
      default: '',
      paper: '',
    },
  },
  f: {
    h2: {
      fontSize: 32,
      lineHeight: 120,
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      lineHeight: 120,
      fontWeight: 700,
    },
  },
  spacing(...values) {
    const FACTOR = 8;
    return values.map(value => (value === 'auto' ? value : `${value * FACTOR}px`)).join(' ');
  },
  font(type) {
    const { fontSize, lineHeight, fontWeight, fontFamily } = this.f[type];
    return `
      font-size: ${fontSize}px;
      line-height: ${lineHeight}%;
      font-weight: ${fontWeight};
      font-family: ${fontFamily ?? '"Inter", sans-serif'};
    `;
  },
});
