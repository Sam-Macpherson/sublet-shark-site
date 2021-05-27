/**
 * The top App component.
 */
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  LoginPage,
  LogoutPage,
  RegisterPage,
  RecoverPasswordPage,
  ListingsPage
} from '../../views';
import { useStyles } from './style';


function App() {
  const classes = useStyles();
  
  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/listings" />
          </Route>
          <Route path="/recover-account" render={() => <RecoverPasswordPage />}/>
          <Route path="/login" render={() => <LoginPage />}/>
          <Route path="/logout" render={() => <LogoutPage />} />
          <Route path="/register" render={() => <RegisterPage />}/>
          <Route path="/listings" render={() => <ListingsPage />}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
