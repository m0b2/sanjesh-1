import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EditIcon from '@material-ui/icons/Edit';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './admin-sidebar.style.css';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { SidebarContext } from '../../context/sidebar.context';
import Avatar from '../avatar/avatar.component';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
    list: {
        width: 250,
        fontFamily: 'B Homa'
    },
    fullList: {
        width: 'auto',
        fontFamily: 'Samim',
        fontWeight: '900',
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
        color: 'white'


    },
    topList: {
        height: '42px',
        backgroundColor: '#b71c1c'
    },
    text: {
        fontFamily: 'Vazir',

        textAlign: 'right',
        marginLeft: '16px'
    },
    nested: {
        paddingRight: '34px',
    },
});

const categories_Sub = [
    { title: 'مشاهده ', icon: InfoIcon, pushValue: '/category', isDropable: false },
    { title: 'افزودن ', icon: ExitToAppIcon, pushValue: '/addcategory', isDropable: false }];
    
const menu_items = [
    { title: 'خانه', icon: PermIdentityIcon, pushValue: '/profile', isDropable: false },
    { title: 'دسته بندی', icon: PermIdentityIcon, pushValue: '/profile', isDropable: true, subList: categories_Sub },
    { title: 'کاربران', icon: EditIcon, pushValue: '/edit', isDropable: false },
    { title: 'سوالات', icon: EditIcon, pushValue: '/questions', isDropable: false },
    { title: 'اعلان ها', icon: InfoIcon, pushValue: '/aboutus', isDropable: false },
    { title: 'مدیریت دسترسی‌ها', icon: InfoIcon, pushValue: '/aboutus', isDropable: false },
    { title: 'تنظیمات', icon: InfoIcon, pushValue: '/aboutus', isDropable: false },
    { title: 'خروج', icon: ExitToAppIcon, pushValue: '', isDropable: false }
];

export default function SwipeableTemporaryDrawer() {
    const dispatch = useDispatch();
    const { isOpen, setOpen } = React.useContext(SidebarContext);
    const [sideOpen, setSideOpen] = React.useState(false);
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
            // onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >


            {<List style={{ direction: 'rtl' }}>
                {menu_items.map((value, index) => ((!value.isDropable) ?
                    <Link to={`${value.pushValue}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>

                        <ListItem style={{ direction: 'rtl' }} button key={`list-side${index}`}
                            onClick={() => {
                                if (value.title === 'خروج') {
                                    dispatch({ type: 'USER_LOGGED_OUT' })
                                }
                            }}>
                            <ListItemIcon>{<value.icon />}</ListItemIcon>
                            <ListItemText style={{ fontFamily: 'IranSans' }}
                                classes={{ primary: classes.text }}
                                className={classes.text} primary={value.title} />
                        </ListItem>
                        <Divider />
                    </Link>
                    :


                    <>
                        <ListItem style={{ direction: 'rtl' }} button key={`list-side${index}`}
                            onClick={() => {
                                if (value.title === 'خروج') {
                                    dispatch({ type: 'USER_LOGGED_OUT' })
                                } else {
                                    setSideOpen((oldState) => !oldState)
                                }


                            }}>
                            <ListItemIcon>{<value.icon />}</ListItemIcon>
                            <ListItemText style={{ fontFamily: 'IranSans' }}
                                classes={{ primary: classes.text }}
                                className={classes.text} primary={value.title} />
                            {sideOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={sideOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                {value.subList.map((value, index) => (
                                    <Link to={`${value.pushValue}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>

                                        <ListItem className={classes.nested} style={{ direction: 'rtl' }} button key={`list-side${index}`}
                                            onClick={() => {
                                                if (value.title === 'خروج') {
                                                    dispatch({ type: 'USER_LOGGED_OUT' })
                                                }
                                            }}>
                                            <ListItemIcon>{<value.icon />}</ListItemIcon>
                                            <ListItemText style={{ fontFamily: 'IranSans' }}
                                                classes={{ primary: classes.text }}
                                                className={classes.text} primary={value.title} />
                                        </ListItem>
                                    </Link>))}



                            </List>
                        </Collapse>
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
                            <CloseIcon style={{ color: 'white' }} />

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