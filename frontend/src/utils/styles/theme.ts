import { deepPurple, grey, lime } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[400],
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
});

export default theme;
