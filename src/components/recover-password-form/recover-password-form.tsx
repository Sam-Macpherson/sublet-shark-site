import React, { useState } from "react";
import { 
  Grid, 
  Paper, 
  Button, 
  TextField, 
  makeStyles, 
  Typography,
  Link as MUILink
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { LockText } from '../lock-text';


const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));


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
              <MUILink variant="body2" component={Link} to="/login">
                Cancel
              </MUILink>
            </Grid>
          </Grid>
        </form>}
        {emailSent && <Typography variant="h5">Recovery email sent</Typography>}
        {emailSent && <MUILink variant="body2" component={Link} to="/login">Back to login</MUILink>}
      </div>
    </Paper>
  );
}

export default RecoverPasswordForm;
