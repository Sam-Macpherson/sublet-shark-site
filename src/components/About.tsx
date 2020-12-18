import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { Paper } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
  div: {
    padding: theme.spacing(4, 4, 4, 4),
  }
}));

function About() {
  const styles = useStyles();

  return (
    <Paper>
      <div className={styles.div}>
        <Grid item>
          <Typography variant="h3">🦈 Sublet Shark</Typography>
          <Divider />
          <Typography variant="body1">
            Sublet Shark is an application intended to provide a post-secondary student-centric 
            sublet finding platform. In broad terms, Sublet Shark aims to eliminate the layers 
            of landlords and leasing agents from the process of finding affordable, 
            short-term housing for students in university towns. Sublet Shark is
            developed by students, for students, with ease-of-use in mind.
          </Typography>
          <Typography variant="h5">
            🎓 Emphasis on students
          </Typography>
          <Divider />
          <Typography variant="body1">
            Sublet Shark <strong>is</strong>:
            <ul>
              <li>For post-secondary students looking for short term accommodation near their institution</li>
              <li>For post-secondary students looking to sublet their room/apartment to another local student</li>
            </ul>
            Sublet Shark <strong>is not</strong>:
            <ul>
              <li>For leases</li>
              <li>For landlords or leasing agents, or anyone who isn't a student</li>
              <li>For long-term rental arrangements</li>
            </ul>
          </Typography>
          <Typography variant="h5">
          ☑️ Commitment to quality
          </Typography>
          <Divider />
          <Typography variant="body1">
            The developers of Sublet Shark are students who have faced the housing
            Facebook groups and the leasing sites term after term, and are sick of 
            keeping track of listings on multiple platforms, while communicating 
            with apathetic leasing agents and landlords through email. Account creation is 
            exclusively available to students, and listings displayed on Sublet Shark 
            are personally vetted, to ensure they are accurate and complete. We focus on 
            the ease-of-use of our platform by building intuitive interfaces that compliment
            our purpose.
          </Typography>
          <Divider />
          <Typography variant="body2">
            Sublet Shark is currently in development, but we hope to release something as soon as possible. 
          </Typography>
        </Grid>
      </div>
    </Paper>
  )
}

export default About;