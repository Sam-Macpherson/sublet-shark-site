/**
 * A component for bullet points with a checkmark or X. 
 */

import React from "react";
import { Avatar, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { CheckCircleOutline, HighlightOff } from "@material-ui/icons";

import { useStyles } from "./style";


interface BulletPointProps {
  checkMark?: boolean;
  text: string;
}


const BulletPoint = ({ checkMark, text }: BulletPointProps) => {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemIcon>
      <Avatar className={classes.avatar}>
        {checkMark ? <CheckCircleOutline /> : <HighlightOff />}
      </Avatar>
      </ListItemIcon>
      <ListItemText classes={{primary: classes.text}} primary={text}/>
    </ListItem>
  );
};


export default BulletPoint;
