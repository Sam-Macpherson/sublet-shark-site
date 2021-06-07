/**
 * The form component to log into the site.
 */
import React, { useState } from "react";
import { 
  Grid, 
  Paper, 
  Button, 
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
import api from "global/axios.config";

import { useStyles } from "./style";


interface FormData {
  email: string;
  password: string;
}


function LoginForm() {
  const classes = useStyles();
  const history = useHistory();
  const initialFormData : FormData = Object.freeze({
    email: "",
    password: "",
  });
  const [formData, updateFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: any) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    api.post(
      "/users/login/",
      {
        username: formData.email,
        password: formData.password,
      }
    ).then(loginResponse => {
      localStorage.setItem("access_token", loginResponse.data.access);
      localStorage.setItem("refresh_token", loginResponse.data.refresh);
      api.defaults.headers["Authorization"] =
        `Bearer ${localStorage.getItem("access_token")}`;
      history.push("/listings");
    }).catch(errors => {
      console.log(errors);
    });
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Log in
          </Button>
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
