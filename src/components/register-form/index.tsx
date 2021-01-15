/**
 * The form component for registering an account.
 */

import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Button,
  Checkbox,
  TextField,
  IconButton,
  InputLabel,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Link as MUILink,
  FormControlLabel,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import LockText from "../lock-text";
import { useStyles } from "./style";


interface Institution {
  domains: Array<string>;
  name: string;
  address: string;
}


function RegisterForm() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [allowAdditionalEmails, setAllowAdditionalEmails] = useState(true);
  const [institutions, setInstitutions] = useState([]);
  const [chosenInstitution, setChosenInstitution] = useState<Institution | null>(null);
  const [chosenDomain, setChosenDomain] = useState<string | null>(null);

  useEffect(() => {
    axios.get(
      '/institutions/institutions/', 
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } 
      }
    ).then(response => {
      setInstitutions(response.data);
    }).catch(errors => {
      console.log(errors);
    })
  }, []);

  return (
    <Paper elevation={5}>
      <div className={classes.paper}>
        <LockText text="Sign up" />
        <form className={classes.form} noValidate>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
                <Autocomplete
                  options={institutions}
                  getOptionLabel={(institution: Institution) => institution.name}
                  value={chosenInstitution}
                  onChange={(event: ChangeEvent<{}>, value: Institution | null) => {
                    setChosenInstitution(value);
                    setChosenDomain('');
                  }}
                  renderInput={(params) => <TextField {...params} autoFocus required label="Institution" variant="outlined" />}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={1}>
              <Typography align="center" variant="h6">@</Typography>
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                options={chosenInstitution ? chosenInstitution.domains : []}
                getOptionLabel={(domain: string) => domain}
                value={chosenDomain}
                onChange={(event: ChangeEvent<{}>, value: string | null) => {
                  setChosenDomain(value);
                }}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Password</InputLabel>
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
            <Grid item xs={12}>
              <FormControlLabel
                  control={
                    <Checkbox
                        checked={allowAdditionalEmails}
                        onChange={() => setAllowAdditionalEmails(!allowAdditionalEmails)}
                        color="primary" />
                  }
                  label="I want to receive updates and promotions via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <MUILink variant="body2" component={Link} to="/login">
                Already have an account? Log in
              </MUILink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Paper>
  );
}

export default RegisterForm;
