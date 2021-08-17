import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  largeAvatar: {
    height: theme.spacing(24),
    width: theme.spacing(24),
  },
  background: {
    width: "100%",
    height: "100vh",
    background: theme.palette.primary.light,
  },
  card: {
    padding: theme.spacing(2),
    height: "100%",
    width: "100%",
    background: "white",
    color: theme.palette.primary.dark,
  },
  profileContainerGrid: {
    marginTop: theme.spacing(4),
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileGridInformationItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileAvatar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

export { useStyles };