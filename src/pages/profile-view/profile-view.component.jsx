import React from 'react';
import './profile-view.style.css';
import { connect, useDispatch } from 'react-redux';
import MaterialTab from '../../components/material-tab/material-tab.component';
import FormProfile from '../../components/form/form.component';
import StudentProfile from '../../components/student-profile/student-profile.component';

const tabs = ['حساب کاربری', 'مشخصات', 'تحصیلات', 'سلامت']
const ProfilView = () => {
    const [state, setState] = React.useState({
        firstName: '',
        lastName: '',
        ssn: '',
        birthDay: '',
        state: '',
        city: ''
    });


    /**
     * Moshakhas mikone in page be sideList niaz dare ya na!
     */
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch({ type: 'SET_TAB_VALUE', payload: tabs });
        dispatch({ type: 'ADD_SIDE_LIST' });
        dispatch({ type: 'REMOVE_FOOTER' });


        return () => {
            dispatch({ type: 'REMOVE_SIDE_LIST' })
            dispatch({ type: 'ADD_FOOTER' });
        };
    }, [dispatch]);
    const content = [
        '',
        ''
    ]
    const SwipeContianer = <MaterialTab data={{
        tabs: ['مشخصات', 'ویژه دانشجویان'],
        content: content,
    }} insideComponent={[<FormProfile />, <StudentProfile />]} >
    </MaterialTab>;

    return (
        <>




            {window.screen.width < 701 ? SwipeContianer : null}




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













































