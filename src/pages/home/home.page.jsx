import React from 'react';
import './home.page.css';
import HomePage from '../../containers/homepage-content/homepage-content.container'
import Avatar from '../../components/avatar/avatar.component';





export default () => {




    return (
        <div className="home-page-wrapper">

            <div >
                <Avatar />
            </div>
            <HomePage />


        </div>
    )
}