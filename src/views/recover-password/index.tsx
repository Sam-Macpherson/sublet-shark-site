/**
 * The Recover Password page.
 */

import { Grid } from "@material-ui/core";
import { About, RecoverPasswordForm } from '../../components';
import { useStyles } from "./style";


function RecoverPasswordPage() {
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
          <RecoverPasswordForm />
        </div>
      </Grid>
    </Grid>
  );
}


export default RecoverPasswordPage;
