// The login page.

import { Avatar, Button, Grid, Link, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import About from "../components/About";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import axios from "axios";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  pageContainer: {
    height: "100%",
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    // width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface Institution {
  domains: Array<string>;
  name: string;
  address: string;
}

function LoginPage() {
  const classes = useStyles();
  const [registering, setRegistering] = useState(true);
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
    <Grid 
      container
      alignItems="center"
      style={{ minHeight: '100%' }}
    >
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <div className={classes.gridItem}>
          <About />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <div className={classes.gridItem}>
          <Paper>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">{registering ? "Sign up" : "Log in"}</Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2} alignItems="center">
                  {registering && <Grid item xs={12}>
                      <Autocomplete
                        options={institutions}
                        getOptionLabel={(institution: Institution) => institution.name}
                        value={chosenInstitution}
                        onChange={(event: ChangeEvent<{}>, value: Institution | null) => {
                          setChosenInstitution(value);
                          setChosenDomain('');
                        }}
                        renderInput={(params) => <TextField {...params} autoFocus label="Institution" variant="outlined" />}
                      />
                  </Grid>}
                  {registering && <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                    />
                  </Grid>}
                  {registering && <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>}
                  <Grid item xs={registering ? 5 : 12}>
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
                  {registering && <Grid item xs={1}>
                    <Typography align="center" variant="h5">@</Typography>
                  </Grid>}
                  {registering && <Grid item xs={6}>
                    <Autocomplete
                      options={chosenInstitution ? chosenInstitution.domains : []}
                      getOptionLabel={(domain: string) => domain}
                      value={chosenDomain}
                      onChange={(event: ChangeEvent<{}>, value: string | null) => {
                        setChosenDomain(value);
                      }}
                      renderInput={(params) => <TextField {...params} variant="outlined" />}
                    />
                  </Grid>}
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
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
                  {registering ? "Sign up" : "Log in"}
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2" onClick={() => {setRegistering(!registering)}}>
                      {registering ? "Already have an account? Log in" : "Don't have an account? Sign up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default LoginPage;