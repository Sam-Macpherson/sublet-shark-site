/**
 * The component that holds the summary of what Sublet Shark is and is not.
 */

import React from "react"
import { List, Grid, Typography } from "@material-ui/core";

import BulletPoint from "fields/bullet-point-field";

import { useStyles } from "./style";

const About = () => {
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
                  <BulletPoint 
                    checkMark 
                    text={"For post-secondary students looking for short term accommodation near their institution"} 
                  />
                  <BulletPoint
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
                  <BulletPoint text={"For leases"} />
                  <BulletPoint text={"For landlords or leasing agents, or anyone who isn't a student"} />
                  <BulletPoint text={"For long-term rental arrangements"} />
                </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default About;
