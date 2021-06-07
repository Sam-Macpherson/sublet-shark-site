/**
 * The top App component.
 */
import { BrowserRouter } from 'react-router-dom';
import SubletSharkRoutes from "routes/SubletSharkRoutes";

import { useStyles } from './style';

const App = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <SubletSharkRoutes />
      </BrowserRouter>
    </div>
  );
};


export default App;
