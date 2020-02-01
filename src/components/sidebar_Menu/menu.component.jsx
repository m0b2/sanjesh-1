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
        fontFamily: 'B Yekan'


    },
    topList: {
        height: '42px',
        backgroundColor: '#fafafa'
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


    const classes = useStyles();

    return (
        <div>

            <ListItem style={{ direction: 'rtl' }} key={`list-side${'sdasd'}`} className={classes.topList}>
                <ListItemIcon>
                    <IconButton className={classes.iconClose} aria-label="delete"
                        onClick={() => false}
                    >
                        <CloseIcon />

                    </IconButton>
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.listText }} primary={'حساب کاربری'} />
            </ListItem>
            <Divider />


            <Avatar />



            <Divider />

        </div>
    );
}