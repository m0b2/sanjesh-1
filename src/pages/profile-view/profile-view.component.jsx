import React from 'react';
import './profile-view.style.css';
import Avatar from '../../components/avatar/avatar.component';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Field from '../../components/profile-field/profile-field.component';
import { connect, useStore, useDispatch } from 'react-redux';
import Tab from '../../components/tab-header/tab-header.component';
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


const tabs = ['حساب کاربری', 'مشخصات', 'تحصیلات', 'سلامت']
const ProfilView = () => {


    /**
     * Moshakhas mikone in page be sideList niaz dare ya na!
     */
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch({ type: 'SET_TAB_VALUE', payload: tabs });
        dispatch({ type: 'ADD_SIDE_LIST' });


        return () => dispatch({ type: 'REMOVE_SIDE_LIST' });
    }, [dispatch]);










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
                    {/* <Chip color="primary" classes={{ root: classes.root }} label={'تغییر تصویر'} /> */}
                </div>
            </Fade>
            {window.screen.width < 421 ? <Tab /> : null}
            <Paper className={classes.paper}>
                {/* <Tabs
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
                </Tabs> */}


            </Paper>

            <Field />
            <Field />
            <Field />

        </>

    )


}

const mapStatetoProps = (store) => {
    return (
        {
            current_tab: store.current_tab,
            tabs_title: store.current_tab,
        }
    )
}

export default connect(mapStatetoProps)(ProfilView);













































