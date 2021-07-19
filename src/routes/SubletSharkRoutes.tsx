import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticationRoutes from "routes/AuthenticationRoutes";
import SiteRoutes from "./SiteRoutes";


const SubletSharkRoutes = (): ReactElement => {
  return (
    <Switch>
      <Route path="/auth/" component={AuthenticationRoutes} />
      <Route component={SiteRoutes} />
    </Switch>
  );
};

export default SubletSharkRoutes;
