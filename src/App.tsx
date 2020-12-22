import { makeStyles } from "@material-ui/core";
import React from "react";
import LoginPage from "./views/LoginPage";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


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
          <Route path="/login" render={() => <LoginPage registering={false} />}/>
          <Route path="/register" render={() => <LoginPage registering />}/>    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
