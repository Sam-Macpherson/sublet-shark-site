/**
 * The header at the top of the app with profile picture, notifications, etc.
 */

import {
  Menu,
  Badge,
  AppBar,
  Avatar,
  Toolbar,
  MenuItem,
  IconButton,
  Typography,
} from "@material-ui/core";
import {
  Notifications as NotificationsIcon
} from '@material-ui/icons';
import React, {FC, useState} from "react";
import { useHistory } from "react-router-dom";

import { useStyles } from "./style";

interface HeaderProps {
  text: string;
}

const Header: FC<HeaderProps> = ({ text }) => {
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
    history.push("/auth/logout");
  }

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          {text}
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
};


export default Header;