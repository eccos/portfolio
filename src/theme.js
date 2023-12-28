import { deepOrange, lightBlue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: lightBlue,
    error: {
      main: red.A400,
    },
  },
});

export default theme;
