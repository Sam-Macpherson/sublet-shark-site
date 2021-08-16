import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  listingsContainerGrid: {
    padding: theme.spacing(2),
    margin: theme.spacing(0),
    width: "100%",
  },
  background: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    width: "100%",
    height: "100%",
    background: theme.palette.primary.light,
  },
}));

export { useStyles };
