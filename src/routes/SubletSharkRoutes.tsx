import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import ListingsRoutes from "routes/ListingsRoutes";
import AuthenticationRoutes from "routes/AuthenticationRoutes";
import ProfilePage from "profile";


const SubletSharkRoutes = (): ReactElement => {
  return (
    <Switch>
      <Route path="/profile/" component={ProfilePage} />
      <Route path="/auth/" component={AuthenticationRoutes} />
      <Route path="/" component={ListingsRoutes} />
    </Switch>
  );
};

export default SubletSharkRoutes;
