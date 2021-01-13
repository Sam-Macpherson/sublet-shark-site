/**
 * The component for a lock icon with a text below it.
 */

import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { Avatar, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./style";


interface LockTextProps {
  text: string;
}


function LockText(props: LockTextProps) {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">{props.text}</Typography>
    </Grid>      
  );
}

export default LockText;
