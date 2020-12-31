/**
 * The styles for the BulletPoint component.
 */

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: theme.palette.primary.dark,
  },
  text: {
    color: theme.palette.primary.dark,
  }
}));


export { useStyles };
