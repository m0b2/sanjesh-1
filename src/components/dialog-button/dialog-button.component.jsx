import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/icons/Alarm'


const useStyles = makeStyles(theme => ({
  root: {
    direction: 'rtl',
    fontFamily: 'Vazir'
  },
  button: {
    fontFamily: 'Vazir'


  },
  content: {
    fontFamily: 'Vazir'
  },
  title: {
    fontFamily: 'Vazir',
    fontWeight: '900',
    textAlignment: 'right'
  },

}));

export default function AlertDialog({ deleteFunc, children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOK = () => {
    deleteFunc();
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        {children}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.root}
      >

        <DialogTitle id="alert-dialog-title" classes={{ root: classes.title }}>
          <p className={classes.title}>
            هشدار
        </p>


        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.content} >
            آیا مطمئن هستید ؟
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.button} onClick={handleOK} color="primary" autoFocus>
            تایید
          </Button>
          <Button className={classes.button} onClick={handleClose} color="primary">
            لغو
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}