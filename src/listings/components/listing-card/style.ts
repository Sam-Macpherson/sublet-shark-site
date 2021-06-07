import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    color: theme.palette.primary.dark,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


export { useStyles };
