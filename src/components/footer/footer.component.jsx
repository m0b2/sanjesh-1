import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './footer.style.css';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const Footer = ({ location, history }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(location.pathname.substring(1));


    return (
        <BottomNavigation value={value} onChange={(event, newValue) => handleChange(event, newValue, setValue, history)}
            className={classes.root + ' main-footer'}
        >
            <BottomNavigationAction label={"Home"} value="home" icon={<HomeIcon style={{ fontSize: 30 }} />} />
            <BottomNavigationAction label={"Compare"} value="compare" icon={<CompareArrowsIcon style={{ fontSize: 30 }} />} />
            <BottomNavigationAction label={"Questions"} value="question" icon={<HelpOutlineIcon style={{ fontSize: 30 }} />} />
            <BottomNavigationAction label={"Notification"} value="notification" icon={<NotificationsIcon style={{ fontSize: 30 }} />} />
        </BottomNavigation>
    )

}


export default withRouter(Footer);




const handleChange = (event, newValue, setValue, history) => {
    setValue(newValue);
    history.replace(`/${newValue}`)

};



const useStyles = makeStyles({
    root: {
        fontSize: '55px'
    },
});
