import {Route, Switch} from "react-router-dom";
import ProfilePage from "profile";
import ListingsRoutes from "./ListingsRoutes";
import NavigationBar from "navigation-bar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  display: {
    display: "flex",
  },
}));

const SiteRoutes = () => {
  const classes = useStyles();

  return (
    <article className={classes.display}>
      <NavigationBar />
      <Switch>
        <Route path="/users/:id/profile/" component={ProfilePage} />
        <Route path="/" component={ListingsRoutes} />
      </Switch>
    </article>
  );
}

export default SiteRoutes;
