import CircleIcon from '@mui/icons-material/Circle';
import { Components, Theme } from '@mui/material';
import { css } from 'styled-components';

import { palette } from './palette';
import { types } from './types';

const inputStyles = {
  ...types.body2,
  padding: '12px 16px',
  color: palette.common.black,
};

export const components: Components<Theme> | undefined = {
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
        ...types.body2,
        width: '100%',
        borderRadius: 5,
        color: palette.common.black,
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        ':before, :after': {
          display: 'none',
          borderBottom: 'none',
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      standard: {
        ...types.body4,
        color: palette.common.black,
      },
      select: {
        padding: 0,
        outline: 'none',
        background: 'transparent',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        width: '100%',
        color: palette.common.black,
      },
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        padding: '16px 12px',
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        background: palette.grey['100'],
      },
    },
  },
  MuiTableRow: {
    variants: [
      {
        props: { color: 'completed' },
        style: { '.MuiTableCell-body': { color: palette.primary.main } },
      },
    ],
    styleOverrides: {
      root: {
        ':last-child .MuiTableCell-body': {
          border: 0,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        verticalAlign: 'top',
        color: palette.common.black,
        borderBottom: `0.4px dashed ${palette.primary.main}`,
      },
      head: {
        ...types.body3,
        border: 'none',
        padding: '12px 8px',
      },
      body: {
        ...types.body4,
        padding: '16px 8px',
      },
    },
  },
  MuiRating: {
    styleOverrides: {
      root: {
        gap: 4,
        '.MuiSvgIcon-root': {
          width: 12,
          height: 12,
        },
      },
      icon: {
        color: palette.info.main,
      },
      iconEmpty: {
        color: palette.primary.main,
      },
    },
    defaultProps: {
      icon: <CircleIcon />,
      emptyIcon: <CircleIcon />,
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        ...types.body4,
        color: palette.common.black,
      },
    },
  },
  MuiCircularProgress: {
    styleOverrides: {
      circle: {
        color: palette.info.main,
      },
    },
  },
  MuiDivider: {
    variants: [
      {
        props: { variant: 'middle' },
        style: props => {
          return css`
            color: ${props.theme.palette.common.black};
          `;
        },
      },
    ],
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        background: 'transparent',

        '&.Mui-expanded': {
          margin: 0,
          minHeight: 'auto',
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        background: 'transparent',
        ...types.h2,
        color: palette.common.black,
        paddingLeft: 0,
        paddingRight: 0,
        margin: 0,
        minHeight: 'auto',

        '&.Mui-expanded': {
          margin: 0,
          minHeight: 'auto',
        },

        '&::before': {
          backgroundColor: palette.common.black,
        },
      },
      content: {
        minHeight: 'auto',
        marginBottom: '20px',
        marginTop: '20px',

        '&.Mui-expanded': {
          minHeight: 'auto',
          marginBottom: '20px',
          marginTop: '20px',
        },
      },
      gutters: {
        '&::before': {
          backgroundColor: palette.common.black,
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        color: palette.common.black,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: '40px',
      },
    },
  },
  MuiAccordionActions: {
    styleOverrides: {
      root: {
        paddingBottom: '40px',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      contained: {
        border: `1px solid ${palette.common.black}`,
        borderRadius: 5,
        padding: '12px 20px',
        textTransform: 'none',
        minWidth: 160,
        ...types.body9,
        color: palette.common.black,

        // '&.Mui-disabled': {
        //   background: palette.grey['500'],
        //   opacity: 0.5,
        //   cursor: 'not-allowed',
        // },
      },
      containedPrimary: {
        border: `1px solid ${palette.common.black}`,
        borderRadius: 5,
        padding: '12px 20px',
        textTransform: 'none',
        minWidth: 160,
        ...types.body9,
        color: palette.common.white,
      },
      textSecondary: {
        padding: '12px 20px',
        textTransform: 'none',
        minWidth: 120,
        ...types.body2,
        color: palette.grey['500'],
      },
      outlinedSecondary: {
        border: `1px solid ${palette.grey['500']}`,
        borderRadius: 5,
        padding: '12px 20px',
        textTransform: 'none',
        minWidth: 160,
        ...types.body9,
        color: palette.grey['500'],
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        ...types.body4,
        color: palette.grey['500'],
      },
    },
  },
  MuiMenu: {
    variants: [
      {
        props: { color: 'lang' },
        style: { '.MuiPaper-root': { background: palette.primary.main } },
      },
    ],
  },

  // TODO: refactor
  // MuiInput: {
  //   styleOverrides: {
  //     underline: {
  //       border: 'none',
  //       ':before': {
  //         border: 'none',
  //       },
  //       ':after': {
  //         border: 'none',
  //       },
  //     },
  //     root: {
  //       border: 'none',
  //       ':before': {
  //         border: 'none',
  //       },
  //       ':after': {
  //         border: 'none',
  //       },
  //     },
  //     focused: {
  //       border: 'none',
  //       ':before': {
  //         border: 'none',
  //       },
  //       ':after': {
  //         border: 'none',
  //       },
  //     },
  //     disabled: {
  //       border: 'none',
  //       ':before': {
  //         border: 'none',
  //       },
  //       ':after': {
  //         border: 'none',
  //       },
  //     },
  //   },
  // },
  // MuiSelect: {
  //   styleOverrides: {
  //     standard: {
  //       border: 'none',
  //     },
  //     select: {
  //       border: 'none',
  //     },
  //     filled: {
  //       border: 'none',
  //     },
  //     disabled: {
  //       border: 'none',
  //     },
  //   },
  // },
  // MuiAutocomplete: {
  //   styleOverrides: {
  //     input: {
  //       ...inputStyles,
  //     },
  //   },
  // },
  // MuiPaper: {
  //   styleOverrides: {
  //     root: {
  //       borderRadius: '0px',
  //     },
  //   },
  // },
  // MuiList: {
  //   styleOverrides: {
  //     root: {
  //       backgroundColor: palette.info.main,
  //     },
  //   },
  // },
  // MuiMenuItem: {
  //   styleOverrides: {
  //     root: {
  //       backgroundColor: palette.info.main,
  //     },
  //   },
  // },
};
