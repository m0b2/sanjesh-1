import React from 'react';
import './admin-home.style.css';
import AdminHomePage from '../../containers/admin-homepage-content/admin-homepage-content.container'
import Avatar from '../../components/avatar/avatar.component';
import { useStore } from 'react-redux';





export default () => {
    const store = useStore();



    return (
        <div className="admin-home-page-wrapper">

            <div >
                <Avatar name={store.getState().user.full_name} />
            </div>
            <AdminHomePage />


        </div>
    )
}