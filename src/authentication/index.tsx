import { ReactElement } from "react";
import { Grid } from "@material-ui/core";
import About from "about";

import { useStyles } from "./style";


const Authentication = (props: any): ReactElement => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      style={{ minHeight: "100%" }}
    >
      <Grid item xs={12} sm={12} md={6} lg={8}>
        <div className={classes.gridItem}>
          <About />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <div className={classes.gridItem}>
          {props.children}
        </div>
      </Grid>
    </Grid>

  );
};

export default Authentication;
