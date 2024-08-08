'use client'
import './globals.css'
import Link from '@mui/material/Link';
import { blueGrey, grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { BarDrawer } from '@/components/barDrawer/barDrawer';
import Container from '@mui/material/Container';
import { CurrentPlayer } from '@/components/marquee/currentPlayer';

// Footer

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        TSE-coders
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Styling theme

const grayBlue = createTheme({
  palette: {
    primary: {
      light: blueGrey[200],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
    secondary: {
      light: grey[200],
      main: grey[500],
      dark: grey[700],
    },
  },
});

export default function RootLayout({ children }) {

  return (
    <html>
      <body>
        <main>
          {/* -------------------   MAIN STYLING THEM CONFIGURATION  ------------------- */}
          <ThemeProvider theme={grayBlue}>
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />   
                {/* ------------------- NAVBAR AND DRAWER RENDERING ------------------- */}
                <BarDrawer/>
                {/* ------------------- CONTENT STYLING ------------------- */}                              
                <Box component="main"  sx={ { backgroundColor: (theme) => theme.palette.mode === 'light'? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, height: '100vh', overflow: 'auto'}}>                 

                {/* MARQUEE*/}
                <Container maxWidth="lg" sx={{ mt: 11, mb: 4 }}>
                  <CurrentPlayer/>
                </Container>
                  {/* ------------------- CHILDREN PAGES CONTENT------------------- */}                 
                  {children}
                {/* ------------------- FOOTER ------------------- */} 
                 <Copyright sx={{ pt: 4 }} />
              </Box>
            </Box>
            </ThemeProvider>
        </main> 
      </body>
    </html>
  )
}
