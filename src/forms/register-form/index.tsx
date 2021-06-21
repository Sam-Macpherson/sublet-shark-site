/**
 * The form component for registering an account.
 */

import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
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
import LockText from "fields/lock-text-field";
import API from "api";

import { useStyles } from "./style";
import LoadingButton from "fields/loading-button";


interface RegisterFormData {
  institution: Institution | null;
  domain: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  allowAdditionalEmails: boolean;
}

const RegisterForm = () => {
  const classes = useStyles();
  const [submittingRegister, setSubmittingRegister] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const initialFormData: RegisterFormData = Object.freeze({
    institution: null,
    domain: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    allowAdditionalEmails: true,
  });

  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, updateFormData] = useState<RegisterFormData>(initialFormData);

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
    API.fetchInstitutions().then((institutions: Institution[]) => {
      setInstitutions(institutions);
    })
  }, []);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSubmittingRegister(true);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    API.register({
      email: formData.email + "@" + formData.domain,
      password: formData.password,
      first_name: formData.firstName,
      last_name: formData.lastName,
    }).then(() => {
      setSubmittingRegister(false);
      setEmailSent(true);
    }).catch(() => setSubmittingRegister(false));
  }

  return (
    <Paper elevation={5}>
      <div className={classes.paper}>
        {!emailSent && <LockText text="Sign up" />}
        {!emailSent && <form className={classes.form} noValidate>
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
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            loading={submittingRegister}
          >
            Sign up
          </LoadingButton>
          <Grid container justify="flex-end">
            <Grid item>
              <MUILink variant="body2" component={Link} to="/auth/login">
                Already have an account? Log in
              </MUILink>
            </Grid>
          </Grid>
        </form>}
        {emailSent && <Typography variant="h5">Check your email</Typography>}
        {emailSent && <Typography variant="body2">We've sent you an email with a link to activate your account</Typography>}
        {emailSent && <MUILink variant="body2" component={Link} to="/auth/login">Back to login</MUILink>}
      </div>
    </Paper>
  );
};

export default RegisterForm;
