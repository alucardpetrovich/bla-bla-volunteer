import { createTheme, Theme } from '@mui/material/styles';

import { ThemePalette, Types } from '../../styled';

export enum DeviceSizes {
  xs = 360,
  sm = 768,
  md = 1024,
  lg = 1366,
  xl = 1920,
}

const palette: ThemePalette = {
  common: {
    black: '#323434',
    white: '#FBFCFD',
  },
  background: {
    default: '#FBFCFD',
  },
  grey: {
    100: '#F2F2F3',
    500: '#8C8E91',
    700: '#808080',
  },
  info: {
    main: '#F5DF4D', //F5DF4D
    hover: '#f6d605',
  },
  primary: {
    main: '#93A9D2',
    hover: '#5880cb',
  },
};
const types: Types = {
  h1: {
    fontSize: 32,
    lineHeight: 1.2,
    fontWeight: 700,
  },
  h2: {
    fontSize: 24,
    lineHeight: 1.2,
    fontWeight: 700,
  },
  h3: {
    fontSize: 20,
    lineHeight: 1.2,
    fontWeight: 700,
  },
  h4: {
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: 700,
  },
  body1: {
    fontSize: 20,
    lineHeight: 1.5,
    fontWeight: 500,
  },
  body7: {
    fontSize: 10,
    lineHeight: 1.2,
    fontWeight: 500,
  },
  body2: {
    fontSize: 16,
    lineHeight: 1.3,
    fontWeight: 400,
  },
  body3: {
    fontSize: 14,
    lineHeight: 1.2,
    fontWeight: 400,
  },
  body4: {
    fontSize: 12,
    lineHeight: 1,
    fontWeight: 400,
  },
  body5: {
    fontSize: 12,
    lineHeight: 1.2,
    fontWeight: 400,
  },
  body6: {
    fontSize: 10,
    lineHeight: 1,
    fontWeight: 400,
  },
};

const inputStyles = {
  ...types.body2,
  padding: '12px 16px',
  color: palette.common.black,
};

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
    MuiFilledInput: {
      styleOverrides: {
        input: {
          ...inputStyles,
        },
        root: {
          borderRadius: 5,
          color: palette.common.black,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          ...inputStyles,
        },
        root: {
          borderRadius: 5,
          color: palette.common.black,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          ...inputStyles,
        },
        root: {
          borderRadius: 5,
          color: palette.common.black,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: palette.common.black,
        },
      },
    },
  },
  palette,
  spacing(...values) {
    const FACTOR = 8;
    return values.map(value => (value === 'auto' ? value : `${value * FACTOR}px`)).join(' ');
  },
  font(type) {
    const { fontSize, lineHeight, fontWeight, fontFamily } = types[type];
    return `
      font-size: ${fontSize}px;
      line-height: ${lineHeight};
      font-weight: ${fontWeight};
      font-family: ${fontFamily ?? '"Inter", sans-serif'};
    `;
  },
});
