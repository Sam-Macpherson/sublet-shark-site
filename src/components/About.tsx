/**
 * The component that holds the summary of what Sublet Shark is.
 */

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Avatar, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { CheckCircleOutline, HighlightOff } from "@material-ui/icons";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";


const useStyles = makeStyles(theme => ({
  header: {
    margin: theme.spacing(2, 0, 0, 2),
  },
  text: {
    color: theme.palette.primary.dark,
  },
  avatar: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: theme.palette.primary.dark,
  },
}));

function generate(strings: Array<String>, icon: React.ReactElement, classes: ClassNameMap) {

  return strings.map((value) =>
    <ListItem>
      <ListItemIcon>
      <Avatar className={classes.avatar}>
        {icon}
      </Avatar>
      </ListItemIcon>
      <Typography variant="body1">
        <ListItemText classes={{primary: classes.text}} primary={value}/>
      </Typography>
    </ListItem>
  );
}


function About() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={4} direction="column">
        <Grid item>
          <Typography className={classes.text} variant="h3">🦈 Sublet Shark</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="flex-start">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" className={classes.header}>
                Sublet Shark <strong>is</strong>:
              </Typography>
                <List>
                  {generate([
                      "For post-secondary students looking for short term accommodation near their institution", 
                      "For post-secondary students looking to sublet their room/apartment to another local student"
                    ],
                    <CheckCircleOutline />,  
                    classes
                  )}
                </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" className={classes.header}>
                Sublet Shark <strong>is not</strong>:
              </Typography>
                <List>
                  {generate([
                      "For leases",
                      "For landlords or leasing agents, or anyone who isn't a student",
                      "For long-term rental arrangements"
                    ],
                    <HighlightOff />,
                    classes
                  )}
                </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default About;