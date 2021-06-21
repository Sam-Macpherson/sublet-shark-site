/**
 * The styles for the Button component that executes a long-running task.
 */

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(0),
    position: 'relative',
  },
  button: {
    margin: theme.spacing(2, 0),
  },
  buttonProgress: {
    color: theme.palette.primary.dark,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));


export { useStyles };
