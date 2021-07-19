import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    width: "100%",
    height: "100%",
    background: theme.palette.primary.light,
  },
}));

export { useStyles };