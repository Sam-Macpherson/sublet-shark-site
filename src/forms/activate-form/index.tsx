/**
 * The form component for recovering your password.
 */

import React, {useEffect, useState} from "react";
import {
  Paper,
  Link as MUILink
} from "@material-ui/core";
import {Link, useParams} from 'react-router-dom';
import LockText from 'fields/lock-text-field';

import { useStyles } from "./style";
import API from "api";

const ActivateForm = () => {
  const [verifying, setVerifying] = useState<boolean>(true);
  const [verified, setVerified] = useState<boolean>(false);
  const params = useParams<ActivateAccountParamTypes>();
  useEffect(() => {
    API.activateAccount(params).then(resp => {
      setVerifying(false);
      setVerified(true);
    }).catch(() => {
      setVerifying(false);
    })
  }, [params])

  const classes = useStyles();
  return(
    <Paper elevation={5}>
      <div className={classes.paper}>
        <LockText
          unlocked={!verifying && verified}
          text={verifying ? "Verifying account" : (verified ? "Account verified" : "Could not verify account")}
        />
        {!verifying && <MUILink variant="body2" component={Link} to="/auth/login">Back to login</MUILink>}
      </div>
    </Paper>
  );
};


export default ActivateForm;
