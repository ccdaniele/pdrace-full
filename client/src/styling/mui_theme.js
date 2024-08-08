import { blueGrey,  } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: blueGrey [500],
    secondary: blueGrey [200],
  },
});

export function prTheme() {

    <ThemeProvider theme={theme}>
        
    </ThemeProvider>

}