import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Route, Routes } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import Home from './Home';
import Todo from './Todo';
import Search from './Search';
import LoginForm from './LoginForm';
import HeadsetIcon from '@mui/icons-material/Headset';
import './App.css'; 

function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='AppbarStyle'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Music App <HeadsetIcon style={{ fontSize: '24px' }} />
          </Typography>
     
      
      <nav className="Sidebar">
        <ul className="SidebarList">
          <li>
            <Link to="/" className='HomeS'> <HomeIcon /> Home</Link>
          </li>
          <li>
            <Link to="/todo" className='TodoS'><PlaylistAddCheckIcon /> Your Library</Link>
          </li>
          <li>
            <Link to="/search" className=' SearchS'><SearchIcon /> Search</Link>
          </li>
          <li>
            <Link to="/login" className='LoginS'><LoginIcon /> Login</Link>
          </li>
        </ul>
      </nav>
      </Toolbar>
      </AppBar>
      <div className="centered-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Box>
  );
}

export default HeaderBar;