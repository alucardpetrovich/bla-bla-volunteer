import { createTheme, Theme } from '@mui/material/styles';

import { components } from './components';
import { palette } from './palette';
import { types } from './types';

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
  components,
  palette,
  spacing(...values) {
    const FACTOR = 8;
    return values.map(value => (value === 'auto' ? value : `${value * FACTOR}px`)).join(' ');
  },

  font(type) {
    const { fontSize, lineHeight, fontWeight, fontFamily } = types[type];
    const ff = fontFamily || 'Inter';

    return `
      font-size: ${fontSize}px;
      line-height: ${lineHeight};
      font-weight: ${fontWeight};
      font-family: "${ff}", sans-serif;
    `;
  },
  hover: '@media (hover: hover)',
});
