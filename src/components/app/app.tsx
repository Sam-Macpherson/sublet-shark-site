import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, RecoverPasswordPage } from '../../views';


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
