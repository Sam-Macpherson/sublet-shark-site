/**
 * The styles for theApp component.
 */

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.light,
    height: "100vh",
  },
}));

export { useStyles };
