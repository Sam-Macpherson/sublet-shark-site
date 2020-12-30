/**
 * The Login page.
 */

import { Grid, makeStyles } from "@material-ui/core";
import { About, LoginForm } from '../../components';


const useStyles = makeStyles(theme => ({
  gridItem: {
    padding: theme.spacing(2),
  },
}));


function LoginPage() {
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
          <LoginForm />
        </div>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
