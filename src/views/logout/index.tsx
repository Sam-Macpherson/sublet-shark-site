import {useEffect} from "react";
import api from "../../global/axios.config";
import {useHistory} from "react-router-dom";


const Logout = () =>  {
  const history = useHistory();

  useEffect(() => {
    api.post("/users/logout", {
      refresh_token: localStorage.getItem("refresh_token"),
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log("Error logging out: ", error);
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    api.defaults.headers["Authorization"] = null;
    history.push("/login");
  });

  return (
    <div>Logging out...</div>
  );
}

export default Logout;