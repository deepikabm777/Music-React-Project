import React from 'react';
import './Footer.css'; 
import IconButton from '@mui/joy/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <footer className="my-custom-footer">
      <div className="social-icons">
        <IconButton variant="plain">
          <FacebookIcon />
        </IconButton>
        <IconButton variant="plain">
          <GitHubIcon />
          </IconButton>
          <IconButton variant="plain">
          <TwitterIcon />
        </IconButton>
        <IconButton variant="plain">
          <InstagramIcon />
        </IconButton>
      </div>
      <div className="footer-content">
        <List size="sm" orientation="horizontal" wrap >
          <ListItem nested className="left-section">
            <ListSubheader>Company</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>About</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Jobs</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>For the Record</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested className="right-section">
            <ListSubheader>Communities</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>For Artists</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Developers</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Advertising</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Investors</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </div>
    </footer>
  );
}

export default Footer;