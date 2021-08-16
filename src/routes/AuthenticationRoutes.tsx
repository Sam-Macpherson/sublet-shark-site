import { Route, Switch } from "react-router-dom";
import React, { ReactElement } from "react";
import ForgotPasswordForm from "forms/forgot-password-form"
import LoginForm from "forms/login-form"
import Logout from "authentication/logout"
import RegisterForm from "forms/register-form";
import ActivateForm from "forms/activate-form";
import Authentication from "authentication";
import ResetPasswordForm from "../forms/reset-password-form";


const AuthenticationRoutes = (): ReactElement => {
  return (
    <div style={{background: "white", height: "100vh"}}>
      <Authentication>
        <Switch>
          <Route path="/auth/recover-account" component={ForgotPasswordForm}/>
          <Route path="/auth/login" component={LoginForm}/>
          <Route path="/auth/logout" component={Logout} />
          <Route path="/auth/register" component={RegisterForm}/>
          <Route path="/auth/activate/:uidBase64/:token" component={ActivateForm}/>
          <Route path="/auth/reset-password/:uidBase64/:token" component={ResetPasswordForm} />
        </Switch>
      </Authentication>
    </div>
  );
};

export default AuthenticationRoutes;
