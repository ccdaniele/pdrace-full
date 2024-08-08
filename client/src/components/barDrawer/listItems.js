
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component='a' href='/createplayer'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Join the race" /> 
    </ListItemButton>
  </React.Fragment>
);
