/**
 * The form component for recovering your password.
 */

import React, { useState } from "react";
import { 
  Grid, 
  Paper,
  TextField, 
  Typography,
  Link as MUILink
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import LockText from 'fields/lock-text-field';
import LoadingButton from "fields/loading-button";

import { useStyles } from "./style";

import API from "api";


const ForgotPasswordForm = () => {
  const classes = useStyles();
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);

  const handleChange = (event: any) => setEmail(event.target.value);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSendingEmail(true);
    API.requestPasswordResetEmail({email}).then(() => {
      setEmailSent(true);
    }).catch(() => setSendingEmail(false));
  };

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
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
            loading={sendingEmail}
          >
            Send recovery email
          </LoadingButton>
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
};


export default ForgotPasswordForm;
