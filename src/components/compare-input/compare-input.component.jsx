import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import './compare-input.style.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  feild: {
    '& > *': {
      fontFamily: 'Vazir',
      direction: 'rtl',
      textAlign:'right'
      
    },
    
    
  },
  root: {
    
    '& > *': {
      margin: theme.spacing(1),
      width: 300,
      
      fontFamily: 'Vazir',
      color: 'white',
    


    },
  },
  label: {
    '& > *': {
      color: 'white'
    }

  }


}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className='compare-input-container'>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.feild} id="standard-basic" label="شماره دانشجویی" />
        <div className='compare-input-button'>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}

            classes={{ fullWidth: classes.variant }}
            fullWidth={true}
          >
            <CompareArrowsIcon style={{ fontSize: '48px', position: "absolute", right: '5%' }} />
            <span style={{ fontFamily: 'Vazir', fontSize: '18px', height: '38px' }}>بررسی</span>

          </Button>
        </div>

      </form>

    </div>
  );
}