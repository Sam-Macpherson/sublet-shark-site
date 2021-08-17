import {FC, useEffect, useState} from "react";
import { useStyles } from "./style";
import Header from "header";
import { Avatar, Card, Grid, Typography } from "@material-ui/core";
import API from "api";
import {useParams} from "react-router-dom";
import { SUBLET_STATUS_DISPLAY } from "global/constants";

const ProfilePage: FC = () => {
  const classes = useStyles();
  const { id } = useParams<UserProfileParams>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    API.fetchUserProfile(id).then(response => {
      setUser(response);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div className={classes.background}>
      <Header text="Profile"/>
      <Grid
        container
        direction="column"
        className={classes.profileContainerGrid}>
        <Grid item>
          <Card className={classes.card}>
            <Grid
              container
              spacing={2}
            >
              <Grid item xs={4} className={classes.profileAvatar}>
                <Avatar
                  variant="circular"
                  src={isLoading ? "/favicon.ico" : user?.profile_picture}
                  className={classes.largeAvatar}
                />
              </Grid>
              <Grid item xs={8} className={classes.profileGridInformationItem}>
                <Grid container direction="column">
                  <Typography variant="h3">{user?.first_name} {user?.last_name}</Typography>
                  <Typography variant="body1">{user?.bio ? user?.bio : "This user prefers to play it close to the chest."}</Typography>
                  <Typography variant="overline">{SUBLET_STATUS_DISPLAY(user)}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;