/**
 * The component that holds the summary of what Sublet Shark is and is not.
 */

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { List } from "@material-ui/core";
import AboutBulletPoint from "./AboutBulletPoint";


const useStyles = makeStyles(theme => ({
  listHeader: {
    color: theme.palette.primary.dark,
    margin: theme.spacing(2, 0, 0, 2),
  },
  text: {
    color: theme.palette.primary.dark,
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" spacing={4} direction="column">
        <Grid item>
          <Typography className={classes.text} variant="h3">🦈 Sublet Shark</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text} variant="h5">Sublets for students</Typography> 
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="flex-start">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" className={classes.listHeader}>
                Sublet Shark <strong>is</strong>:
              </Typography>
                <List>
                  <AboutBulletPoint 
                    checkMark 
                    text={"For post-secondary students looking for short term accommodation near their institution"} 
                  />
                  <AboutBulletPoint
                    checkMark 
                    text={"For post-secondary students looking to sublet their room/apartment to another local student"} 
                  />
                </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" className={classes.listHeader}>
                Sublet Shark <strong>is not</strong>:
              </Typography>
                <List>
                  <AboutBulletPoint text={"For leases"} />
                  <AboutBulletPoint text={"For landlords or leasing agents, or anyone who isn't a student"} />
                  <AboutBulletPoint text={"For long-term rental arrangements"} />
                </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default About;