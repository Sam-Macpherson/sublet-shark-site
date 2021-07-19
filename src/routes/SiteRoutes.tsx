import {Route, Switch} from "react-router-dom";
import ProfilePage from "profile";
import ListingsRoutes from "./ListingsRoutes";
import NavigationBar from "navigation-bar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  display: {
    display: "flex",
  },
  mainContent: {
    marginLeft: 160,
  },
}));

const SiteRoutes = () => {
  const classes = useStyles();

  return (
    <article className={classes.display}>
      <NavigationBar />
      <div className={classes.mainContent}>
        <Switch>
          <Route path="/profile/" component={ProfilePage} />
          <Route path="/" component={ListingsRoutes} />
        </Switch>
      </div>
    </article>
  );
}

export default SiteRoutes;
