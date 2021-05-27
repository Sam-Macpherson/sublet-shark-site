import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  media: {
    width: 200,
    height: 200,
  },
  card: {
    margin: theme.spacing(1),
    display: 'flex',
    background: 'white',
    color: theme.palette.primary.dark,
  },
}));


export { useStyles };
