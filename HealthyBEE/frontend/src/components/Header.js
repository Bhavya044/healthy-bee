import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Box, Button, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';









const Header = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState();
  const isLoggedIn = useSelector(state => state.isLoggedIn);


  return (
    <div>
      <AppBar sx={{background:' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,7,42,1) 35%, rgba(152,32,45,1) 100%)',height:'55px'}}>
        <Toolbar>
          <EmojiNatureIcon />
          <Typography id='headerFont' variant='h4' sx={{color:'white',fontFamily :'Monospace',letterSpacing: 5 } }>
         HealthyBEE
          </Typography>
          {isLoggedIn && <Box display='flex' marginLeft={'auto'} marginRight={'auto'}>
            <Tabs value={value} onChange={(e, val) => setValue(val)}>
              <Tab LinkComponent={Link} to='/blogs' label='Blogs' sx={{ color: 'white' }} />
               <Tab LinkComponent={Link} to='/blogs/add' label='Add Blog' sx={{ color: 'white' }} />
              <Tab LinkComponent={Link} to='/myBlogs' label='My Blogs' sx={{ color: 'white' }} />
              <Tab LinkComponent={Link} to='/calculatebmi' label='Calculate BMI' sx={{ color: 'white' }} />
             
            </Tabs>
          </Box>}
          <Box display='flex' marginLeft='auto'>
             { !isLoggedIn && <> <Button LinkComponent={Link} to='/auth'  sx={{margin:'1',borderRadius:10}} color='error'  style={{ fontSize: '22px' }}>Login</Button>
            <Button LinkComponent={Link} to='/auth' sx={{ margin: '1', borderRadius: 10 }} style={{ fontSize: '23px' }} >Signup</Button> </> }
            {isLoggedIn && <Button LinkComponent={Link} to='/auth' sx={{ margin: '1', borderRadius: 10 }} onClick={()=>dispatch(authActions.logout())} style={{ fontSize: '23px' }} >Logout</Button>}
          </Box>
        </Toolbar>
      </AppBar>
      
</div>
  )
}

export default Header