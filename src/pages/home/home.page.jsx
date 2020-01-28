import React from 'react';
import './home.page.css';
import HomePage from '../../containers/homepage-content/homepage-content.container'
import Profile from '../../components/profile/profile.component';





export default () => {




    return (
        <div className="home-page-wrapper">
            <div className="">
            
                <Profile />

                <HomePage />

            </div>
        </div>
    )
}