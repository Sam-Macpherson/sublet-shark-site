/**
 * The form component for recovering your password.
 */

import React, {useEffect, useState} from "react";
import _ from "lodash";
import {
  Paper,
  Link as MUILink, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid
} from "@material-ui/core";
import { Link, useParams } from 'react-router-dom';
import LockText from 'fields/lock-text-field';

import { useStyles } from "./style";
import API from "api";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import LoadingButton from "../../fields/loading-button";

interface ResetPasswordFormData {
  password: string;
  password2: string;
}

const ResetPasswordForm = () => {
  const classes = useStyles();
  const params = useParams<ActivateAccountParamTypes>();
  const initialFormData: ResetPasswordFormData = Object.freeze({
    password: "",
    password2: "",
  });
  const [formData, updateFormData] = useState<ResetPasswordFormData>(initialFormData);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const [submittingNewPassword, setSubmittingNewPassword] = useState<boolean>(false);
  const [tokenExpired, setTokenExpired] = useState<boolean>(false);
  const [passwordReset, setPasswordReset] = useState<boolean>(false);

  const handleChange = (event: any) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    API.resetPassword(params, formData).then(() => {
      setPasswordReset(true);
      setSubmittingNewPassword(false);
    }).catch((error) => {
      if (_.includes(error.response.data.detail, 'token is either invalid or has expired')) {
        setTokenExpired(true);
      }
      setSubmittingNewPassword(false);
    })
  };

  useEffect(() => {
    if (!passwordReset) {
      API.passwordResetLinkExpired(params).catch(error => {
        setTokenExpired(true);
      });
    }
  }, [params, passwordReset]);

  let headerText = "Reset your password";
  if (tokenExpired) {
    headerText = "Password reset link is invalid";
  } else if (passwordReset) {
    headerText = "Password successfully reset";
  }

  return (
    <Paper elevation={5}>
      <div className={classes.paper}>
        <LockText
          text={headerText}
          unlocked={passwordReset}
        />
        {!tokenExpired && !passwordReset && <form className={classes.form} noValidate>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>New Password</InputLabel>
                <OutlinedInput
                  required
                  id="password"
                  label="New Password *"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
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
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Confirm New Password</InputLabel>
                <OutlinedInput
                  required
                  id="password2"
                  label="Confirm New Password *"
                  type={showPassword2 ? 'text' : 'password'}
                  name="password2"
                  value={formData.password2}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword2(!showPassword2)}
                        edge="end"
                      >
                        {showPassword2 ? <Visibility /> : <VisibilityOff />}
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
            onClick={handleSubmit}
            loading={submittingNewPassword}
          >
            Reset Password
          </LoadingButton>
        </form>}
        {passwordReset && <MUILink variant="body2" component={Link} to="/auth/login">Back to login</MUILink>}
        {tokenExpired && <MUILink variant="body2" component={Link} to="/auth/recover-account">Request another link</MUILink>}
      </div>
    </Paper>
  );
};


export default ResetPasswordForm;
