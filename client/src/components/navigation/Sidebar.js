import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import MenuIcon from '@mui/icons-material/Menu';

import { Avatar } from '@mui/material';

// width for the navigation side bar
const drawerWidth = 240;

// Main container that slides in/out with the drawer

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

//App Bar transition animation when opening and closing

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  //function for opening the drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  //function for closing the drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <div className='side-bar-nav'>
        
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="static" open={open}>
      
        <Toolbar  >

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h5"
            //sx is from mui defining styles from a theme
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              textDecoration: 'none',
              
            }}
            
          >
            To Do 
          </Typography>
          <DoneIcon />
        </Toolbar>

      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Link as={Link} to={`/avatar`}>
        <Avatar />
        </Link>
        <br />
        <Typography variant = "h5"> Welcome User,</Typography>
        <br/>

        <Divider  />
        <List>

        <ListItemButton component={Link} to ="/">
            <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component={Link} to ="/view">
            <ListItemText primary="View All" />
        </ListItemButton>

        <Divider />
        <ListItemButton component={Link} to ="/high">
            <ListItemText primary="High Priority Tasks" />
        </ListItemButton>

        <ListItemButton component={Link} to ="/med">
            <ListItemText primary="Medium Priority Tasks" />
        </ListItemButton>

        <ListItemButton component={Link} to ="/low">
            <ListItemText primary="Low Priority Tasks" />
        </ListItemButton>

        <Divider /> 


        </List>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />

      </Main>
    </Box>
    </div>
  );
}