/**
 * The styles for the ForgotPasswordForm component.
 */

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));


export { useStyles };
