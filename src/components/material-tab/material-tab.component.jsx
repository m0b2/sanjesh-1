import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, data, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}







TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};






function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}






const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white',
        textAlign:'center'
    },
    tabRoot: {
        backgroundColor: 'white',
        fontFamily: 'Vazir'
    },
    indicator: {
        backgroundColor: '#b71c1c'
    },
    tabsRoot: {
        width: '100%',
        minWidth:'100%'
    }
}));





export default function FullWidthTabs({ data }) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);




    let myTabs = data.tabs.map((value, index) => <Tab classes={{ root: classes.tabRoot }} label={value} {...a11yProps(index)} />)
    let dataContent = data.content.map((title, index) => <TabPanel value={value} index={index} dir={'rtl'}>
        <span style={{
            fontFamily: 'Vazir', textAlign: 'center'
        }}>{title}</span>
    </TabPanel>)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };









    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="#b71c1c"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    classes={{ indicator: classes.indicator }}

                >
                    {myTabs}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={'x-reverse'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >

                {dataContent}
            </SwipeableViews>
        </div>
    );
}