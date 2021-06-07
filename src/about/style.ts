/**
 * Styles for the About component.
 */

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  listHeader: {
    color: theme.palette.primary.dark,
    margin: theme.spacing(2, 0, 0, 2),
  },
  text: {
    color: theme.palette.primary.dark,
  }
}));


export { useStyles };
