import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    display: "block",
  },
  drawer: {
    height: "100%",
    width: theme.spacing(24),
  },
}))

export { useStyles };
