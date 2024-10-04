import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({      
  typography: {
    button: {
      textTransform: 'none',
      fontSize: 'inherit'
    }
  }
});

export default muiTheme;