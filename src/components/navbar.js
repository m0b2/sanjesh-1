import React from 'react';
import './navbar.css';
import Sidebar from '../components/sidebar/sidebar.component';
import HomePageContent from '../containers/homepage-content/homepage-content.container';
import Footer from '../components/footer/footer.component';

export default () => {
  const [activePage,setActivePage] = React.useState('home');
  return (
    <body className="hold-transition sidebar-mini">
      <div className="wrapper">
        <Sidebar />
        <HomePageContent activePage={activePage}/>
        {(window.screen.width<421)?<Footer setPage={setActivePage}/>:null}
      </div>
    </body>

  )
}