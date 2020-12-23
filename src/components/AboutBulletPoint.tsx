import { Avatar, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";
import { CheckCircleOutline, HighlightOff } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: theme.palette.primary.dark,
  },
  text: {
    color: theme.palette.primary.dark,
  }
}));

interface AboutBulletPointProps {
  checkMark?: boolean;
  text: string;
}

function AboutBulletPoint(props: AboutBulletPointProps) {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemIcon>
      <Avatar className={classes.avatar}>
        {props.checkMark ? <CheckCircleOutline /> : <HighlightOff />}
      </Avatar>
      </ListItemIcon>
      <Typography variant="body1">
        <ListItemText classes={{primary: classes.text}} primary={props.text}/>
      </Typography>
    </ListItem>
  );
}

export default AboutBulletPoint;