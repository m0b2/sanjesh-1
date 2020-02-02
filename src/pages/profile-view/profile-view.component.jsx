import React from 'react';
import './profile-view.style.css';
import Avatar from '../../components/avatar/avatar.component';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Field from '../../components/profile-field/profile-field.component';

const useStyles = makeStyles({
    root: {

        width: '200px',
        height: '40px',
        fontFamily: 'Vazir'
    },
    paper: {
        width: '100%',
        fontFamily: 'Vazir'
    },
    tabs: {
        display: 'flex',
        flexDirection: "row",
        flexShrink: 'initial',
        width: '100%',
        fontFamily: 'Vazir'
    },
    tab: {

        fontFamily: 'Vazir'
    }
});
const ProfilView = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Fade top>
                <div className='profile-avatar-container'>
                    <Avatar style={{ position: 'relative' }} />
                    <Chip color="primary" classes={{ root: classes.root }} label={'تغییر تصویر'} />
                </div>
            </Fade>
            <Paper className={classes.paper}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    className={classes.tabs}
                >
                    <Tab className={classes.tab} label="مشخصات" />
                    <Tab className={classes.tab} label="تحصیلات" />
                    <Tab className={classes.tab} label="سلامت" />
                </Tabs>


            </Paper>

            <Field />

        </>

    )


}


export default ProfilView;













































