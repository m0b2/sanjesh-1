import React from 'react';
import './home.page.css';
import HomePage from '../../containers/homepage-content/homepage-content.container'
import Avatar from '../../components/avatar/avatar.component';
import { useStore } from 'react-redux';





export default () => {
    const store = useStore();



    return (
        <div className="home-page-wrapper">

            <div >
                <Avatar name={store.getState().user.full_name}/>
            </div>
            <HomePage />


        </div>
    )
}