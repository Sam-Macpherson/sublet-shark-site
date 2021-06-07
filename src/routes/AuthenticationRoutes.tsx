import { Route, Switch } from "react-router-dom";
import React, { ReactElement } from "react";
import RecoverPasswordForm from "forms/recover-password-form"
import LoginForm from "forms/login-form"
import Logout from "authentication/logout"
import RegisterForm from "forms/register-form";
import Authentication from "authentication";


const AuthenticationRoutes = (): ReactElement => {
  return (
    <Authentication>
      <Switch>
        <Route path="/auth/recover-account" component={RecoverPasswordForm}/>
        <Route path="/auth/login" component={LoginForm}/>
        <Route path="/auth/logout" component={Logout} />
        <Route path="/auth/register" component={RegisterForm}/>
      </Switch>
    </Authentication>
  );
};

export default AuthenticationRoutes;
