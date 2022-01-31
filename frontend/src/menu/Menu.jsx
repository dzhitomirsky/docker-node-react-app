import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import './Menu.css';

const drawerWidth = 240;

const MENU_ITEMS = [
  {
    label:'Users List',
    link: '/users'
  },
]

export default function Menu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    >
      <div>
        <Toolbar />
        <Divider />
        <List>
          {MENU_ITEMS.map(({ label, link }) => (
              <ListItem button key={label}>
                <ListItemText primary={
                  <Link to={link} key={label} className="menuLink">
                    {label}
                  </Link>
                } />
              </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}