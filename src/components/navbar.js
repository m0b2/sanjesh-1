import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import HomePageContent from '../containers/homepage-content/homepage-content.container';
import Footer from '../components/footer/footer.component';

export default () => {
  return (
    <body className="hold-transition sidebar-mini">
      <div className="wrapper">
        <Sidebar />
        <HomePageContent />
        {(window.screen.width < 421) ? <Footer /> : null}
      </div>
    </body>

  )
}