/**
 * The navigation-bar at the top of the app with profile picture, notifications, etc.
 */

import {
  Drawer, ListItem, List, Divider, ListItemIcon, ListItemText,
} from "@material-ui/core";
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
} from '@material-ui/icons';
import React, { FC } from "react";
import {useStyles} from "./style";


const NavigationBar: FC = () => {
  const classes = useStyles();

  const drawerOptions = () => (
    // TODO make real options
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className={classes.fullHeight}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
      >
        {/* TODO Add a profile card here */}
        <Divider />
        {drawerOptions()}
      </Drawer>
    </div>
  );
};


export default NavigationBar;