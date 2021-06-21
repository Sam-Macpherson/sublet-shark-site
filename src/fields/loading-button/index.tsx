import { useStyles } from "./style";
import {Button, ButtonProps, CircularProgress} from "@material-ui/core";
import React, { FC } from "react";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

const LoadingButton: FC<LoadingButtonProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button
        {...props}
        className={classes.button}
        disabled={props.loading}
      >
        {props.children}
      </Button>
      {props.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
  );
};

export default LoadingButton;
