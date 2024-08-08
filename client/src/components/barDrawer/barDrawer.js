
import '@fontsource/roboto/700.css';
import {  useState } from 'react'
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { RadioButtonChecked, Menu, ChevronLeft } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { mainListItems } from '@/components/barDrawer/listItems';
import Divider from '@mui/material/Divider';


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const drawerWidth = 240;

// Navigation bar behavior
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export function BarDrawer(){
  const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <div>
      <AppBar position="absolute" open={open}>
        <Toolbar sx={{ pr: '24px'}}>
          <RadioButtonChecked edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer} sx={{marginRight: '36px',  ...(open && { display: 'none' })}}>
            <Menu />
          </RadioButtonChecked>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>PodRace</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
          <RadioButtonChecked onClick={toggleDrawer}>
              <ChevronLeft/>
          </RadioButtonChecked>
          </Toolbar>
          <Divider />
          <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          </List>
      </Drawer>     
    </div>
  )
}
