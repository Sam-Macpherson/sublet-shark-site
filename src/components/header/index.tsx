import {AppBar, Avatar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import NotificationsIcon from "@material-ui/icons/Notifications"
import { useStyles } from "./style";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";


function Header() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    history.push("/logout");
  }

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          Sublets
        </Typography>
        <div className={classes.icons}>
          <IconButton color="inherit">
            <Badge badgeContent={15} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={handleMenu}>
            <Avatar className={classes.avatar} src="/favicon.ico" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={menuOpen}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={logout}>Log out</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}


export default Header;