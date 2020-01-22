import React from 'react';
import './home.page.css';
import HomePage from '../../containers/homepage-content/homepage-content.container'
import Sidebar from '../../components/sidebar/sidebar.component';

export default () => {




    return (
        <body className="hold-transition sidebar-mini">
            <div className="wrapper">
                <Sidebar />
                <HomePage />
                
            </div>
        </body>
    )
}