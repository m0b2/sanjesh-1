import React from 'react';
import './profile-view.style.css';
import Avatar from '../../components/avatar/avatar.component';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Field from '../../components/profile-field/profile-field.component';
import { connect, useStore, useDispatch } from 'react-redux';
import Tab from '../../components/tab-header/tab-header.component';
import MaterialTab from '../../components/material-tab/material-tab.component';
import Form from '../../components/form/form.component';
const useStyles = makeStyles({
    root: {

        width: '200px',
        height: '40px',
        fontFamily: 'Vazir'
    },
    paper: {
        width: '100%',
        fontFamily: 'Samim',
        borderColor: 'transparent'
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
    const [state, setState] = React.useState({
        firstName: '',
        lastName: '',
        ssn:'',
        birthDay: '',
        state: '',
        city: ''
    })

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
    const content = [
        '',
        'اطلاعات ورودی شما در نوبت آنالیز قرارگرفته است که پس از تکمیل مراحل بررسی، در این قسمت درج خواهد شد.',
        'اطلاعات این قسمت در حال تکمیل می باشد.'
    ]
    return (
        <>
            <Fade top>
                <div className='profile-avatar-container'>
                    <Avatar style={{ position: 'relative' }} />
                    {/* <Chip color="primary" classes={{ root: classes.root }} label={'تغییر تصویر'} /> */}
                </div>

            </Fade>



            {window.screen.width < 701 ? <MaterialTab data={{
                tabs: ['مشخصات', 'تحصیلات', 'سلامت'],
                content: content,
            }} insideComponent={[<Form />]} >
            </MaterialTab> : null}




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













































