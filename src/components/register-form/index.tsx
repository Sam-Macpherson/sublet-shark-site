/**
 * The form component for registering an account.
 */

import React, { useEffect, useState } from "react";
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
import { Link, useHistory } from 'react-router-dom';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import LockText from "../lock-text";
import { useStyles } from "./style";
import api from "../../global/axios.config";


interface Institution {
  domains: Array<string>;
  name: string;
  address: string;
}

interface FormData {
  institution: Institution | null;
  domain: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  allowAdditionalEmails: boolean;
}

function RegisterForm() {
  const classes = useStyles();
  const history = useHistory();
  const initialFormData : FormData = Object.freeze({
    institution: null,
    domain: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    allowAdditionalEmails: true,
  });

  const [institutions, setInstitutions] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (event: any) => {
    updateFormData({
      ...formData,
      [event.target.name]: "value" in event.target ? event.target.value : event.target.checked,
    });
  }

  const handleChangeSelect = (event: any, value: Institution | string | null, key: string) => {
    updateFormData({
      ...formData,
      [key]: value,
    })
  }

  useEffect(() => {
    axios.get(
      '/institutions/institutions/', 
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }
    ).then(response => {
      setInstitutions(response.data);
    }).catch(errors => {
      console.log(errors);
    })
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    api.post(
      '/users/register/',
      {
        email: formData.email + "@" + formData.domain,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
      }
  ).then(response => {
      api.post(
        '/users/login/',
        {
          username: formData.email + "@" + formData.domain,
          password: formData.password
        }
      ).then(loginResponse => {
        localStorage.setItem("access_token", loginResponse.data.access);
        localStorage.setItem("refresh_token", loginResponse.data.refresh);
        api.defaults.headers["Authorization"] =
          `Bearer ${localStorage.getItem("access_token")}`;
        history.push("/listings");
      })
    }).catch(errors => {
      console.log(errors);
    })
  }

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
                  value={formData.institution}
                  onChange={(event, value) => handleChangeSelect(event, value, "institution")}
                  renderInput={(params) => <TextField {...params} autoFocus required label="Institution" variant="outlined" />}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                id="lastName"
                label="Last Name"
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                label="Email Address"
              />
            </Grid>
            <Grid item xs={1}>
              <Typography align="center" variant="h6">@</Typography>
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                options={formData.institution ? formData.institution?.domains : []}
                getOptionLabel={(domain: string) => domain}
                noOptionsText="Select an institution to see available domains."
                value={formData.domain}
                onChange={(event, value) => handleChangeSelect(event, value, "domain")}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    required
                    label="Domain"
                    variant="outlined"
                  />}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  required
                  id="password"
                  label="Password *"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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
                        checked={formData.allowAdditionalEmails}
                        onChange={handleChange}
                        name="allowAdditionalEmails"
                        color="primary" />
                  }
                  label="I want to receive email updates and promotions."
              />
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
