import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './header-navigation.style.css';
import Logo from '../logo/Logo.component';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { SidebarContext } from '../../context/sidebar.context';
import SecurityIcon from '@material-ui/icons/Security';
import SettingsIcon from '@material-ui/icons/Settings';
import { connect } from 'react-redux';

import PersonIcon from '@material-ui/icons/Person';


const menu = [
    { label: 'صفحه اصلی', Icon: HomeIcon, address: '/home' },
    { label: 'قیاس', Icon: CompareArrowsIcon, address: '/compare' },
    { label: 'سوالات', Icon: HelpOutlineIcon, address: '/question' },
    { label: 'اعلان ها', Icon: NotificationsIcon, address: '/notification' }
]




function IconLabelTabs({ history, isAdmin, admin }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { isOpen, setOpen } = React.useContext(SidebarContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    if (isAdmin && !admin.access) {
        return <div></div>
    }
    let ac = admin.access;

    // let dastrasi = {
    //     category: { view: null, create: null, update: null, delete: null },
    //     notification: { view: null, create: null, update: null, delete: null },
    //     role: { view: null, create: null, update: null, delete: null },
    //     user: { view: null, create: null, update: null, delete: null },
    //     setting: { view: null, create: null, update: null, delete: null },
    //     question: { view: null, create: null, update: null, delete: null },
    // }
    const menuAdmin = (ac) ? [
        { label: 'صفحه اصلی', Icon: HomeIcon, address: '/home' },
        (ac.user.view) ? { label: 'کاربران', Icon: PersonIcon, address: '/users' } : null,
        (ac.question.view) ? { label: 'سوالات', Icon: HelpOutlineIcon, address: '/questions' } : null,
        (ac.user.create) ? { label: 'ایجاد نقش', Icon: SecurityIcon, address: '/roles' } : null,
        (ac.setting.view) ? { label: 'تنظیمات', Icon: SettingsIcon, address: '/setting' } : null,
    ] : [];


    let current_items = isAdmin ? menuAdmin : menu;

    const items = current_items.map((value, index) =>
        (value) ? <Tab classes={{ fullWidth: classes.label }} icon={<value.Icon />} label={''} key={`header-tab${index}`}
            onClick={() => history.push(value.address)}
            className={classes.tab}
        />
            :
            null
    )





    return (
        <div className='header-nav-container'>
            <IconButton edge="start" color="inherit" aria-label="menu"
                onClick={() => setOpen({ right: true })}
                style={{ marginBottom: '60px', position: 'absolute', right: '0%' }}
            >
                <MenuIcon style={{ color: '#b71c1c', fontSize: '36px' }} />
            </IconButton>
            <div style={{ marginBottom: '60px', position: 'absolute', right: '3%', marginRight: '16px' }}>
                <Logo size={28} red />
            </div>
            <div style={{ marginBottom: '60px', position: 'absolute', left: '1%', }}>
                {/* <ProfileMenu /> */}
            </div>
            <div className='header-tab-container'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    // variant="fullWidth"
                    indicatorColor="white"
                    aria-label="icon label tabs example"
                    className={classes.root}
                >
                    {items}
                </Tabs>
            </div>
        </div>

    );
}



const mapStateToProps = store => {
    return {

        admin: store.admin,
    };
};



export default connect(mapStateToProps)(withRouter(IconLabelTabs));





const useStyles = makeStyles({
    root: {
        zIndex: '200'
    },
    label: {
        fontFamily: 'Vazir',
        color: '#b71c1c'
    },
    tab: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});