import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 160;

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },
  drawer: {
    width: drawerWidth,
  },
  fullHeight: {
    height: "100%",
  },
  icons: {
    marginLeft: "auto",
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}))

export { useStyles };
