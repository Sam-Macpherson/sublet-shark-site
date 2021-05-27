import {makeStyles} from "@material-ui/core/styles";


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
  appbar: {
    display: "block",
    background: theme.palette.background.paper,
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
