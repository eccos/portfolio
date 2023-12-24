import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c77b0c',
    },
    secondary: {
      main: '#0c57c7',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
