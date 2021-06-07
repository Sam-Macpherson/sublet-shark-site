import { Redirect, Route, Switch } from "react-router-dom";
import React, { ReactElement } from "react";
import ListingsPage from "listings";


const ListingsRoutes = (): ReactElement => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/listings" />
      </Route>
      <Route path="/listings" component={ListingsPage}/>
    </Switch>
  );
};

export default ListingsRoutes;
