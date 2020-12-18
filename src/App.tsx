import { makeStyles } from "@material-ui/core";
import React from "react";
import LoginPage from "./views/LoginPage";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
  },
});

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <LoginPage />
    </div>
  );
}

export default App;
