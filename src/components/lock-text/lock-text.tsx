import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "white",
  },
}));


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
