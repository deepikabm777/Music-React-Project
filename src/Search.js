import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from './Card'
const searchBarStyles = {
  display: 'flex',
  alignItems: 'center',
  width: '1000px', 
  padding: '5px',
  borderRadius: '30px', 
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optional shadow
};

const inputStyles = {
  flex: '1',
  marginLeft: '20px',
  border: 'none',
  outline: 'none',
};

const buttonStyle={
  screenLeft:'20px',
  marginLeft:'15px',
  innerHeight:'10px',

}
const SearchBar = () => {
  return (
    <>
    <>
    <Paper elevation={3} style={searchBarStyles}>
      <InputBase
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        style={inputStyles}
      />
      <IconButton type="submit" aria-label="search" style={buttonStyle}>
        <SearchIcon />
      </IconButton>
    </Paper>
    </>
    <Card/>
    </>
  );
};

export default SearchBar;