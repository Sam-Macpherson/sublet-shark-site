import { Route, Switch } from "react-router-dom";
import React, { ReactElement } from "react";
import RecoverPasswordForm from "forms/recover-password-form"
import LoginForm from "forms/login-form"
import Logout from "authentication/logout"
import RegisterForm from "forms/register-form";
import ActivateForm from "forms/activate-form";
import Authentication from "authentication";


const AuthenticationRoutes = (): ReactElement => {
  return (
    <Authentication>
      <Switch>
        <Route path="/auth/recover-account" component={RecoverPasswordForm}/>
        <Route path="/auth/login" component={LoginForm}/>
        <Route path="/auth/logout" component={Logout} />
        <Route path="/auth/register" component={RegisterForm}/>
        <Route path="/auth/activate/:uidBase64/:token" component={ActivateForm}/>
      </Switch>
    </Authentication>
  );
};

export default AuthenticationRoutes;
