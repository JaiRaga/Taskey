import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3366ff',
    },
    secondary: {
      main: '#ff0000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    editIcon: {
        main: '#61b15a77',
        main: '#61b15a'
    },
    deleteIcon: {
        light: '#ec585877',
        main: '#ec5858'
    }
  },
});

export default theme;