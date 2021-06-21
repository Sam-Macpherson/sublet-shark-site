import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  fullHeight: {
    height: "100%",
  },
  filterPanel: {
    background: theme.palette.background.paper,
  },
  listingsContainerGrid: {
    padding: theme.spacing(4),
  },
  background: {
    width: "100%",
    height: "100%",
    background: theme.palette.primary.light,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export { useStyles };
