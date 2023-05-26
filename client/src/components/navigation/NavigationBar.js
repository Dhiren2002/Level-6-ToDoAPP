import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';





// Function from MUI called Floating action button
// Allows the plus icon to have a circle shape in the middle
const StyledFab = styled(Fab)({ 
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});




function BottomAppBar() {


    return (
      <React.Fragment>
        <CssBaseline />



        <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0 }} style={{backgroundColor: "#00838f"}}>
          <Toolbar>
 
            <IconButton  component={Link} to='/' style={{backgroundColor: "white"}} aria-label="home page">
              <HomeIcon />
            </IconButton>


              <Link as={Link} to='add'>  
            <StyledFab style={{backgroundColor: "#ad1457", color: "white"}} aria-label="add" >
              <AddIcon />

            </StyledFab>
            </Link>


            <Box sx={{ flexGrow: 1 }} />

<div>
            <IconButton component={Link} to='view' color="inherit">
              <SearchIcon />
            </IconButton>
            

</div>



          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }

  export default BottomAppBar;