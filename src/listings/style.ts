import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
  },
  listingsContainerGrid: {
    width: "100%",
    padding: theme.spacing(4),
  },
  background: {
    background: theme.palette.primary.light,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export { useStyles };
