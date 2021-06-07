/**
 * The form component for recovering your password.
 */

import React, { useState } from "react";
import { 
  Grid, 
  Paper, 
  Button, 
  TextField, 
  Typography,
  Link as MUILink
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import LockText from 'fields/lock-text-field';

import { useStyles } from "./style";


function RecoverPasswordForm() {
  const classes = useStyles();
  const [emailSent, setEmailSent] = useState(false);
  
  return(
    <Paper elevation={5}>
      <div className={classes.paper}>
        {!emailSent && <LockText text="Recover account" />}
        {!emailSent && <form className={classes.form} noValidate>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoFocus
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => setEmailSent(true)}
            className={classes.submit}
          >
            Send recovery email
          </Button>
          <Grid container justify="flex-start" direction="row">
            <Grid item>
              <MUILink variant="body2" component={Link} to="/auth/login">
                Cancel
              </MUILink>
            </Grid>
          </Grid>
        </form>}
        {emailSent && <Typography variant="h5">Recovery email sent</Typography>}
        {emailSent && <MUILink variant="body2" component={Link} to="/auth/login">Back to login</MUILink>}
      </div>
    </Paper>
  );
}


export default RecoverPasswordForm;
