/**
 * The navigation-bar at the top of the app with profile picture, notifications, etc.
 */

import {
  Drawer, ListItem, List, Divider, ListItemIcon, ListItemText,
} from "@material-ui/core";
import {
  AccountCircle as AccountCircleIcon,
  House as HouseIcon,
} from '@material-ui/icons';
import React, { FC, useCallback } from "react";
import { useStyles } from "./style";
import { useHistory } from "react-router-dom";


const NavigationBar: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const drawerOptions = useCallback(() => (
    <List className={classes.drawer}>
      <ListItem button onClick={() => history.push("/profile")} key="Profile">
        <ListItemIcon><AccountCircleIcon /></ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button onClick={() => history.push("/listings")} key="Find a sublet">
        <ListItemIcon><HouseIcon /></ListItemIcon>
        <ListItemText primary="Find a sublet" />
      </ListItem>
    </List>
  ), [history, classes]);

  return (
    <div className={classes.drawer}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open
      >
        {/* TODO Add a profile card here */}
        <Divider />
        {drawerOptions()}
      </Drawer>
    </div>
  );
};


export default NavigationBar;