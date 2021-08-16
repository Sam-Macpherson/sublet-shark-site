/**
 * The form component to log into the site.
 */
import React, { useState } from "react";
import { 
  Grid, 
  Paper,
  TextField,
  IconButton, 
  InputLabel, 
  FormControl, 
  OutlinedInput, 
  InputAdornment,
  Link as MUILink,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link, useHistory } from 'react-router-dom';
import LockText from "fields/lock-text-field";
import LoadingButton from "fields/loading-button";
import API from "api";

import { useStyles } from "./style";

interface LoginFormData {
  email: string;
  password: string;
}


const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [submittingLogin, setSubmittingLogin] = useState<boolean>(false);
  const initialFormData: LoginFormData = Object.freeze({
    email: "",
    password: "",
  });
  const [formData, updateFormData] = useState<LoginFormData>(initialFormData);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (event: any) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmittingLogin(true);
    API.login({
      email: formData.email,
      password: formData.password,
    }).then(response => {
      setSubmittingLogin(false);
      history.push("/listings");
    }).catch(() => setSubmittingLogin(false));
  };
  
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
                value={formData.email}
                onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
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
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            loading={submittingLogin}
          >
            Log in
          </LoadingButton>
          <Grid container justify="space-between" direction="row">
            <Grid item>
              <MUILink variant="body2" component={Link} to="/auth/recover-account">
                Forgot password?
              </MUILink>
            </Grid>
            <Grid item>
              <MUILink variant="body2" component={Link} to="/auth/register">
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
