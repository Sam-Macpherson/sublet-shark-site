// The login page.

import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import About from "../components/About";
import Register from "../components/Form/Register";

const useStyles = makeStyles(theme => ({
  pageContainer: {
    height: "100%",
  },
  gridItem: {
    padding: 2,
  },
}))

function LoginPage() {
  const classes = useStyles();

  return (
    <Grid 
      container
      alignItems="center"
      style={{ minHeight: '100%' }}
    >
      <Grid item xs={8}>
        <div className={classes.gridItem}>
          <About />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.gridItem}>
          <Register />  
        </div>
      </Grid>
    </Grid>
  );
}

export default LoginPage;