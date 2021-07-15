import React, { ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

type SnackbarProps = AlertProps&{
    children?:ReactNode,
    open?:boolean;
    openToastBar?:()=>void;
    closeToastBar?:()=>void;
};

function Alert(props: SnackbarProps) {
  return <MuiAlert variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ToastBar({...props}: SnackbarProps) {
  const classes = useStyles();
  //const {open,closeToastBar,openToastBar,textBar} = UseToastBar();

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={props.openToastBar}>
        Open success snackbar
      </Button>
      <Snackbar open={props.open} autoHideDuration={3000} onClose={props.closeToastBar}>
        <Alert onClose={props.closeToastBar} severity={props.severity}>
           {props.children}
        </Alert>
      </Snackbar>
    </div>
  );
}
