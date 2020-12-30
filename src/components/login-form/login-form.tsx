import React, { useState } from "react";
import { 
  Grid, 
  Paper, 
  Button, 
  TextField,
  IconButton, 
  InputLabel, 
  makeStyles,
  FormControl, 
  OutlinedInput, 
  InputAdornment,
  Link as MUILink,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
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


function LoginForm() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  
  return(
    <Paper elevation={5}>
      <div className={classes.paper}>
        <LockText text="Log in" />
        <form className={classes.form} noValidate>
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
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel required htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  required
                  name="password"
                  id="password"
                  label="Password *"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={() => {}}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log in
          </Button>
          <Grid container justify="space-between" direction="row">
            <Grid item>
              <MUILink variant="body2" component={Link} to="/recover-account">
                Forgot password?
              </MUILink>
            </Grid>
            <Grid item>
              <MUILink variant="body2" component={Link} to="/register">
                Don't have an account? Sign up
              </MUILink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Paper>
  );
}

export default LoginForm;
