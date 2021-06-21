/**
 * The component for a lock icon with a text below it.
 */

import React from "react";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { LockOutlined, LockOpenOutlined } from "@material-ui/icons";
import { Avatar, Grid, Typography } from "@material-ui/core";

import { useStyles } from "./style";


interface LockTextProps {
  text: string;
  unlocked?: boolean;
}


const LockText: React.FC<LockTextProps> = ({ text, unlocked }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Avatar className={classes.avatar}>
        {unlocked ? <LockOpenOutlined /> : <LockOutlined />}
      </Avatar>
      <Typography variant="h5">{text}</Typography>
    </Grid>      
  );
};

LockText.defaultProps = {
  unlocked: false,
};

export default LockText;
