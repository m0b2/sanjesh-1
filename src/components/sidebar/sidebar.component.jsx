import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EditIcon from '@material-ui/icons/Edit';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './sidebar.style.css';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { SidebarContext } from '../../context/sidebar.context';
import Avatar from '../avatar/avatar.component';


const useStyles = makeStyles({
  list: {
    width: 250,
    fontFamily: 'B Homa'
  },
  fullList: {
    width: 'auto',
    fontFamily: 'B Homa'
  },
  iconClose: {
    position: 'absolute',
    left: '0',
    top: '0'
  },
  listText: {
    position: 'absolute',
    right: '22px',
    top: '12px',
    fontFamily: 'B Yekan',
    color:'white'


  },
  topList: {
    height: '42px',
    backgroundColor: '#b71c1c'
  },
  text: {
    fontFamily: 'Vazir',

    textAlign: 'right',
    marginLeft: '16px'
  }
});

const menu_items = [
  { title: 'پنل کاربری', icon: PermIdentityIcon, pushValue: '' },
  { title: 'تغییر مشخصات', icon: EditIcon, pushValue: '' },
  { title: 'آمار', icon: EqualizerIcon, pushValue: '' },
  { title: 'درباره ما', icon: InfoIcon, pushValue: '' },
  { title: 'خروج', icon: ExitToAppIcon, pushValue: '' }];

export default function SwipeableTemporaryDrawer() {
  const { isOpen, setOpen } = React.useContext(SidebarContext);
  const classes = useStyles();
  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen({ ...isOpen, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >


      {<List style={{ direction: 'rtl' }}>
        {menu_items.map((value, index) => (
          <><ListItem style={{ direction: 'rtl' }} button key={`list-side${index}`}>
            <ListItemIcon>{<value.icon />}</ListItemIcon>
            <ListItemText style={{ fontFamily: 'B Homa' }}
              classes={{ primary: classes.text }}
              className={classes.text} primary={value.title} />
          </ListItem>
          </>
        ))}

      </List>}






    </div>
  );



  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={isOpen.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
       
          <ListItem style={{ direction: 'rtl' }} key={`list-side${'sdasd'}`} className={classes.topList}>
            <ListItemIcon>
              <IconButton className={classes.iconClose} aria-label="delete"
                onClick={() => setOpen({ right: false })}
              >
                <CloseIcon style={{color:'white'}}/>

              </IconButton>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.listText }} primary={'حساب کاربری'} />
          </ListItem>
          <Divider />


          <Avatar />


        
        <Divider />

        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}