import { makeStyles } from "@material-ui/core";
import React from "react";
import LoginPage from "./views/LoginPage";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RegisterPage from "./views/RegisterPage";
import RecoverPasswordPage from "./views/RecoverPasswordPage";


const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
  },
});

function App() {
  const classes = useStyles();
  
  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/register" />
          </Route>
          <Route path="/recover-account" render={() => <RecoverPasswordPage />}/>
          <Route path="/login" render={() => <LoginPage />}/>
          <Route path="/register" render={() => <RegisterPage />}/>    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
