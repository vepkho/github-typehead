import React from 'react'

import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

const Navigation = (icon) => {
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                <HomeIcon 
                    fontSize='large'
                />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='right'>
            Re.Searcher
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Navigation