/**
 * Logout page.
 */

import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

import API  from "api";


const Logout = () =>  {
  const history = useHistory();

  useEffect(() => {
    API.logout().then(() => {
      history.push("/auth/login");
    })
  });

  return (
    <Typography variant="body1">Logging out...</Typography>
  );
}

export default Logout;