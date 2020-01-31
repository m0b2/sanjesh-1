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


const menu = [
    { label: 'صفحه اصلی', Icon: HomeIcon, address: '/home' },
    { label: 'قیاس', Icon: CompareArrowsIcon, address: '/compare' },
    { label: 'سوالات', Icon: HelpOutlineIcon, address: '/question' },
    { label: 'اعلان ها', Icon: NotificationsIcon, address: '/notification' }
]




const useStyles = makeStyles({
    root: {
        zIndex:'200'
    },
    label: {
        fontFamily: 'Vazir',
        color: '#b71c1c'
    },
    tab:{
        flex:'1',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
});

function IconLabelTabs({ history }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const items = menu.map((value, index) =>
        <Tab classes={{ fullWidth: classes.label }} icon={<value.Icon />} label={value.label} key={`header-tab${index}`}
            onClick={() => history.push(value.address)}
            className={classes.tab}
        />
    )




    return (
        <div className='header-nav-container'>
            <div style={{ marginBottom: '60px', position: 'absolute', right: '1%' }}>
                <Logo size={28} />
            </div>
            <div  className='header-tab-container'>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
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

export default withRouter(IconLabelTabs);