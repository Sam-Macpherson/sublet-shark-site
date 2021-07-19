import {FC} from "react";
import {useStyles} from "./style";
import Header from "header";


const ProfilePage: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Header text="Profile"/>
      My Profile
    </div>
  );
};

export default ProfilePage;