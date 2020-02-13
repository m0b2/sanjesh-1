import React from 'react';
import './profile-edit.style.css';
import { connect, useDispatch } from 'react-redux';
import MaterialTab from '../../components/material-tab/material-tab.component';
import FormProfile from '../../components/form/form.component';
import StudentProfile from '../../components/student-profile/student-profile.component';

const tabs = ['مشخصات', 'ویژه دانشجویان']
const ProfilView = ({ SideTab }) => {
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
        dispatch({ type: 'EDIT_PAGE' });


        return () => {
            dispatch({ type: 'REMOVE_SIDE_LIST' })
            dispatch({ type: 'ADD_FOOTER' });
            dispatch({ type: 'EDIT_PAGE_DONE' });
        };
    }, [dispatch]);
    const content = [
        '',
        ''
    ]
    const tabComponent = [<FormProfile disabled={false} />, <StudentProfile disabled={false} />]
    const SwipeContianer = <MaterialTab data={{
        tabs: ['مشخصات', 'ویژه دانشجویان'],
        content: content,
    }} insideComponent={tabComponent} >
    </MaterialTab>;

    return (
        <div >




            {window.screen.width < 800 ? SwipeContianer : tabComponent[SideTab.current]}




        </div>

    )


}

const mapStatetoProps = (store) => {
    return (
        {
            SideTab: store.SideTab,

        }
    )
}

export default connect(mapStatetoProps)(ProfilView);













































